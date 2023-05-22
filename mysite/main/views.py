from django.shortcuts import render
from django.http import HttpResponse
from .models import Employee
# Create your views here.


def Home(request):

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

def AddEmployee(request):
    return render(request, 'HRWebsite/Add Employee.html')

def ShowEmployees(request):
    return render(request, 'HRWebsite/Show Employees.html')

def SubmitVacation(request):
    return render(request, 'HRWebsite/Submit Vacation.html')

def ShowVacations(request):
    return render(request, 'HRWebsite/Show Vactions.html')