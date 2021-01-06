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
def ihg(form):
    result = []
    sumPrice = 0
    start = datetime.strptime(form['date'][0], '%Y-%m-%d')
    end = datetime.strptime(form['date'][1], '%Y-%m-%d')
    with connection.cursor() as cursor:
        if start - end == timedelta(days=1):
            cursor.execute(
                "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date=%s and end_date = %s",
                [form['name'], start, end])  #酒店查找

            message = cursor.fetchall()
            dates = date_range(start, end)

            for i, item in enumerate(message):
                if float(item[5]) == 0:
                    dates[i]['color'] = 'black'
                else:
                    dates[i]['color'] = 'LawnGreen'
                result.append({
                    'key': i,
                    'room': item[2],
                    'priceType': item[3],
                    'price': float(item[5]),
                    'priceLevel': 'BB',
                    'dates': dates
                })
        else:
            cursor.execute(
                "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date>=%s and end_date <= %s",
                [form['name'], start, end])  #酒店查找
            message = cursor.fetchall()
            dates = date_range(start, end)
            for i, item in enumerate(message[-1]):
                    sumPrice = sumPrice + float(item[5])
                    if float(item[5]) == 0:
                        dates[i]['color'] = 'black'
                    else:
                        dates[i]['color'] = 'LawnGreen'
                    
                    if item[2] != message[i+1]:
  
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
