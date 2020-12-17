from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import HttpResponse, redirect
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
                return HttpResponse('登陆成功！')
            else:
                return HttpResponse('密码错误！')
        else:
            return HttpResponse('用户名错误！')
    
@login_required
def test(request):
    return HttpResponse()