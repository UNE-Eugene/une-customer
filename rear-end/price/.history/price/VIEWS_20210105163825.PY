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
        dic = {
            '洲际': 'T_Ihg_Group_Update',
            '希尔顿': 'T_Hilton_Group_Update',
            '万豪': 'T_Morriott_Group_Update'
        }
        table = dic[form['group']]

        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM %s where hotel_name=%s and start_date=%s and end_date=%s", [table, form['name'], form['date'][0], form['date'][1]]) #酒店查找
        return HttpResponse()