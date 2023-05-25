from django.shortcuts import render, redirect
from .forms import EmployeeForm
from .forms import LoginForm
from django.http import HttpResponse
from .models import Employee
from .models import HR
from django.contrib import messages
from .models import Vacation
from .forms import VacationForm
from .forms import VacationStatusForm
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.


def index(request):
    context = {
        "Employees": Employee.objects.all()
    }
    return render(request, 'Emp/index.html', context)


def index2(request):
    context = {
        "Vacations": Vacation.objects.all()
    }
    return render(request, 'Emp/index2.html', context)


def Home(request):
    return render(request, 'HRWebsite/Home.html',)


def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            return render(request, 'HRWebsite/H Home.html')
    else:
        form = LoginForm()
    return render(request, 'HRWebsite/Log in.html', {'form': form})


def HrHome(request):
    return render(request, 'HRWebsite/H Home.html')


def MHome(request):
    return render(request, 'HRWebsite/M Home.html')


def AddHR(request):
    return render(request, 'HRWebsite/Add HR.html')


def ShowHRs(request):
    return render(request, 'HRWebsite/Show HR.html')


def VacationAction(request):
    context = {
        "Vacations": Vacation.objects.all(),
        "Employees": Employee.objects.all()
    }
    return render(request, 'HRWebsite/Vacation Action.html', context)


def UpdateDeleteHR(request):
    return render(request, 'HRWebsite/Update-Delete HR.html')

# def AddEmployee(request):
#     return render(request, 'HRWebsite/Add Employee.html')


def ShowEmployees(request):
    context = {
        "Employees": Employee.objects.all()
    }
    return render(request, 'HRWebsite/Show Employees.html', context)


def SubmitVacation(request):
    if request.method == 'POST':
        form = VacationForm(request.POST)
        if form.is_valid():
            vacation = Vacation(
                EmployeeID=form.cleaned_data['EmployeeID'],
                startDate=form.cleaned_data['startDate'],
                endDate=form.cleaned_data['endDate'],
                reason=form.cleaned_data['reason']
            )
            vacation.save()
            return render(request, 'HRWebsite/Submit Vacation.html')
    else:
        form = VacationForm()
    return render(request, 'HRWebsite/Submit Vacation.html', {'form': form})


def ShowVacations(request):
    context = {
        "Vacations": Vacation.objects.all(),
        "Employees": Employee.objects.all()
    }
    return render(request, 'HRWebsite/Show Vactions.html', context)


def DeleteEMP(request, id):
    obj = Employee.objects.get(ID=id)
    obj.delete()
    return redirect('ShowEmployees')


def UpdateDeleteEMP(request, id):
    obj = Employee.objects.get(ID=id)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=obj)
        if form.is_valid():
            # Save the Employee data in the DB
            form.save()
            return ShowEmployees(request)
    else:
        form = EmployeeForm(instance=obj)
    return render(request, 'HRWebsite/Update-Delete Employee.html', {'form': form})


def AddEmployee(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST or None)
        if form.is_valid():
            # Do something with the valid form data
            # For example, save it to the database
            employee = Employee(
                userName=form.cleaned_data['userName'],
                Email=form.cleaned_data['Email'],
                phoneNum=form.cleaned_data['phoneNum'],
                address=form.cleaned_data['address'],
                birthDate=form.cleaned_data['birthDate'],
                gender=form.cleaned_data['gender'],
                jobTitle=form.cleaned_data['jobTitle'],
                maritalStatus=form.cleaned_data['maritalStatus'],
                salary=form.cleaned_data['salary'],
                vacationDays=form.cleaned_data['vacationDays']
            )
            # save the Employee data in the DB
            employee.save()
            return render(request, 'HRWebsite/H Home.html')
    else:
        form = EmployeeForm()
    return render(request, 'HRWebsite/Add Employee.html', {'form': form})


def UpdateVacationStatus(request, vacationID):
    if request.method == 'POST':
        form = VacationStatusForm(request.POST)
        if form.is_valid():
            status = form.cleaned_data['status']
            vacation = Vacation.objects.get(ID=vacationID)
            # Update the status based on the submitted value
            if status == 'Approved':
                vacation.status = 'Approved'
            elif status == 'Rejected':
                vacation.status = 'Rejected'
            vacation.save()

            return redirect('VacationAction') 
    else:
        form = VacationStatusForm()

    return render(request, 'update_status.html', {'form': form})
