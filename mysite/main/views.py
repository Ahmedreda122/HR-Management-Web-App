from django.shortcuts import render
from django.http import HttpResponse
from .models import Employee
# Create your views here.

def index(request):
  
    context = {
  "Employees" : Employee.objects.all()
    }
    return render(request, 'Emp/index.html', context)
  
def hey(request):
  template = "Emp/index.html" 
  