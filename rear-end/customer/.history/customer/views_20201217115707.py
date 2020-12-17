from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.shortcuts import HttpResponse
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
            print('user', user)
        else:
            print(User.objects.filter(username=username))
    else:
        return HttpResponse()
    return HttpResponse('success')