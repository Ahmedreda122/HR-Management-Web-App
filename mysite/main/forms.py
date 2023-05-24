
from django import forms
from django.forms.widgets import DateInput
from .models import Employee

class EmployeeForm(forms.ModelForm):
    userName = forms.CharField(max_length=100)
    Email = forms.EmailField()
    address = forms.CharField(max_length=200)
    phoneNum = forms.CharField(max_length=20)
    gender = forms.ChoiceField(choices=[('male', 'Male'), ('female', 'Female')])
    maritalStatus = forms.ChoiceField(choices=[('Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced')])
    birthDate = forms.DateField(widget=DateInput(attrs={'type': 'date'}))
    jobTitle = forms.CharField(max_length=100)
    salary = forms.IntegerField()
    vacationDays = forms.IntegerField()
    
    class Meta:
      model = Employee
      fields = [
        'userName',
        'Email',
        'phoneNum',
        'address',
        'birthDate',
        'jobTitle',
        'maritalStatus',
        'salary',
        'vacationDays'
      ]
