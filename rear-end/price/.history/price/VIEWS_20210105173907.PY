from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json
from django.db import connection


@login_required
def scrap_price(request):
    if request.method == 'POST':
        form = request.body
        form = json.loads(form)
        print(form)
        if form['group'] == '洲际':
            ihg(form)
        elif form['group'] == '希尔顿':
            hilton(form)
        elif form['group'] == '万豪':
            morriott(form)      

        return HttpResponse()


def ihg(form):
    result = []
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Ihg_Group_Update where hotel_name=%s and start_date=%s and end_date=%s",
            [form['name'], form['date'][0], form['date'][1]])  #酒店查找
        message = cursor.fetchall()
        for item in message:
            result.append(
                {
                    'name': item[2],
                    'priceType': item[3],
                    'price': float(item[5]),
                }
            )
        print(result)

def hilton(form):
    result = []
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Hilton_Group_Update where hotel_name=%s and start_date=%s and end_date=%s",
            [form['name'], form['date'][0], form['date'][1]])  #酒店查找
        message = cursor.fetchall()
        for item in message:
            result.append(
                {
                    'name': item[2],
                    'priceType': item[3],
                    'price': float(item[5]),
                }
            )
        print(result)

def morriott(form):
    result = []
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM T_Morriott_Group_Update where hotel_name=%s and start_date=%s and end_date=%s",
            [form['name'], form['date'][0], form['date'][1]])  #酒店查找
        message = cursor.fetchall()
        for item in message:
            result.append(
                {
                    'name': item[2],
                    'priceType': item[3],
                    'price': float(item[5]),
                }
            )
        print(result)
