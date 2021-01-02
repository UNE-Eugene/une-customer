from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json
from HotelMessage.models import *


@ensure_csrf_cookie
def get_csrf(request):
    return HttpResponse()


def loginView(request):
    if request.method == 'POST':
        data = request.body       
        data = json.loads(data)
        username = data['username']
        password = data['password']
        if User.objects.filter(username=username):
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return JsonResponse({
                    'status': 'success',
                    'username': username
                })
            else:
                return JsonResponse({'status': 'error', 'message': '密码错误！'})
        else:
            return JsonResponse({'status': 'error', 'message': '用户名错误！'})


@login_required
def get_user(request):
    print(request.session)
    uid = request.session.get('_auth_user_id')
    username = User.objects.get(pk=uid)
    return HttpResponse(username)


def logoutView(request):
    logout(request)
    return HttpResponse()

#排序： 酒店促销等级，价格等级，客户等级
def hotelOrder(hotelId):
    # levels = hmm.THotelSortLevel.objects.filter
    return 1

def city_date(form):
    hotel_list = THotelAddress.objects.filter(THotelInfo__hotel_id='1').all()
    print(hotel_list)
    return None

def search(request):
    if request.method == 'POST':
        form = request.body
        form = json.loads(form)
        print(form)
        if form['city'] != '' and form['hotel'] == '':
            if form['trade'] == '' and form['budget'] == '0元 到 10000元 ':  #城市+日期
                city_date(form)        
            elif form['trade'] == '' and form['budget'] != '0元 到 10000元 ':  # 城市+预算+日期
                pass
            elif form['trade'] != '' and form['budget'] == '0元 到 10000元 ':  # 城市+商圈+日期
                pass
            elif form['trade'] != '' and form['budget'] != '0元 到 10000元 '  :  # 城市+商圈+预算+日期
                pass
        elif form['hotel'] != '':
            if form['budget'] == '':  # 酒店+日期
                pass
            else:  # 酒店+预算+日期
                pass
    return HttpResponse() 