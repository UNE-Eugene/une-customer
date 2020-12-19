from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json


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

def search(request):
    if request.method == 'POST':
        form = request.body
        form = json.loads(form)
        print(type(form))
    return HttpResponse()