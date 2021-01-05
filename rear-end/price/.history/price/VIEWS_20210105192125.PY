from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json
from django.db import connection
from datetime import datetime, timedelta

# def date_range(start, end):
#     dates = []
#     start = datetime.strptime(start, '%Y-%m-%d')
#     end = datetime.strptime(end, '%Y-%m-%d')
#     while True:
#         if
#     print(start+timedelta(days=1) ==  end)


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


def ihg(form):
    result = []
    start = datetime.strptime(form['date'][0], '%Y-%m-%d')
    end = datetime.strptime(form['date'][1], '%Y-%m-%d')
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date>=%s and end_date <= %s",
            [form['name'], start, end])  #酒店查找
        message = cursor.fetchall()
        print(message)
        for i, item in enumerate(message):
            result.append({
                'key': i,
                'room': item[2],
                'priceType': item[3],
                'price': float(item[5]),
                'priceLevel': 'SS'
            })
        # print(date_range(form['date'][0], form['date'][1]))
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
