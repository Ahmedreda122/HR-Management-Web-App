from django.shortcuts import render
from django.http import HttpResponse
from .models import Employee
# Create your views here.


def index(request):

    # context = {
    #     "Employees": Employee.objects.all()
    # }
    return render(request, 'HRWebsite/Home.html',)

def login(request):
    return render(request, 'HRWebsite/Log in.html')

# def hey(request):
#     template = "Emp/index.html"

def HrHome(request):
    return render(request, 'HRWebsite/H Home.html')

def MHome(request):
    return render(request, 'HRWebsite/M Home.html')
