from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json
from django.db import connection
from datetime import datetime, timedelta


def date_range(start, end):
    dates = []
    while True:
        if start == end:
            break
        else:
            dates.append({'date': start.day})
            start = start + timedelta(days=1)
    return dates


@login_required
def scrap_price(request):
    if request.method == 'POST':
        form = request.body
        form = json.loads(form)
        print(form)
        if form['group'] == '洲际':
            result = ihg(form)
        elif form['group'] == '希尔顿':
            result = hilton(form)
        elif form['group'] == '万豪':
            result = morriott(form)

        return JsonResponse(result, safe=False)


#每天取价格默认最低价/积分价
#每日详情显示房型加价格
#日历显示价格
#价格筛选策略如下：
#根据价格渠道进行分类展示，携程和官网分开展示，房型变更则在房态种进行标注
def ihg(form):
    result = []
    sumPrice = float(0)
    start = datetime.strptime(form['date'][0], '%Y-%m-%d')
    end = datetime.strptime(form['date'][1], '%Y-%m-%d')

    with connection.cursor() as cursor:
        if end - start == timedelta(days=1):
            cursor.execute(
                "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date=%s and end_date = %s and points_compare_to_cash<=1",
                [form['name'], start, end])  #酒店查找

            message = cursor.fetchall()
            dates = date_range(start, end)
            message = sorted(message, key=lambda item: item[-1])

            #积分价处理
            if message[0][3] == '积分价':
                price = float(message[0][5]) * 300 / 10000
                dates[0]['credit'] = 'True'
            else:
                price = float(message[0][5])
                dates[0]['credit'] = 'False'

            #处理日期标注
            dates[0]['room'] = message[0][2]
            dates[0]['price'] = price

            result.append({
                'key': 0,
                'priceType': '官网价',
                'price': price,
                'priceLevel': 'BB',
                'dates': dates
            })
        else:
            cursor.execute(
                "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date>=%s and end_date <= %s order by start_date, points_compare_to_cash",
                [form['name'], start, end])  #酒店查找
            message = cursor.fetchall()
            dates = date_range(start, end)
            print(message)
            x = 0
            for i, item in enumerate(message):
                if i == 0:
                    pass
                else:
                    if item[7] == message[i - 1][7]:

                        continue
                    else:
                        x = x + 1
                        pass

                if item[3] == '积分价':
                    price = float(item[5]) * 300 / 10000
                    dates[x]['credit'] = 'True'
                else:
                    price = float(item[5])
                    dates[x]['credit'] = 'False'

                #处理日期标注
                dates[x]['room'] = item[2]
                dates[x]['price'] = price
            print(dates)
            result.append({
                'key': 0,
                'priceType': '官网价',
                'price': '/',
                'priceLevel': 'BB',
                'dates': dates
            })
        return result


def hilton(form):
    result = []
    start = datetime.strptime(form['date'][0], '%Y-%m-%d')
    end = datetime.strptime(form['date'][1], '%Y-%m-%d')
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Hilton_Group_Update where hotel_name=%s and start_date>=%s and end_date <= %s",
            [form['name'], start, end])  #酒店查找
        message = cursor.fetchall()

        for i, item in enumerate(message):
            result.append({
                'key': i,
                'room': item[2],
                'priceType': item[3],
                'price': float(item[5]),
                'priceLevel': 'BB'
            })
        return result


def morriott(form):
    result = []
    start = datetime.strptime(form['date'][0], '%Y-%m-%d')
    end = datetime.strptime(form['date'][1], '%Y-%m-%d')
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Morriott_Group_Update where hotel_name=%s and start_date>=%s and end_date <= %s",
            [form['name'], start, end])  #酒店查找
        message = cursor.fetchall()
        for i, item in enumerate(message):
            result.append({
                'key': i,
                'room': item[2],
                'priceType': item[3],
                'price': float(item[5]),
                'priceLevel': 'AA'
            })
        return result
