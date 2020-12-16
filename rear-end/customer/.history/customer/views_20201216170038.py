from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.shortcuts import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def loginView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
    return HttpResponse('success')