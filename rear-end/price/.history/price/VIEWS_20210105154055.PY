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
        # with connection.cursor() as cursor:
        return HttpResponse()