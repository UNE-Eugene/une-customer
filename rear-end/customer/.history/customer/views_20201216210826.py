from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.shortcuts import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def get_csrf(request):
    return HttpResponse()

def loginView(request):
    if request.method == 'POST':
        data = request.body
        print(data)
    else:
        return HttpResponse()
    return HttpResponse('success')