from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate

def loginView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')