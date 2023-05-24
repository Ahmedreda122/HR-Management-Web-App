
from django import forms
from django.forms.widgets import DateInput
from .models import Employee
from .models import Vacation


class EmployeeForm(forms.ModelForm):
    userName = forms.CharField(max_length=100)
    Email = forms.EmailField()
    address = forms.CharField(max_length=200)
    phoneNum = forms.CharField(max_length=20)
    gender = forms.ChoiceField(
        choices=[('male', 'Male'), ('female', 'Female')])
    maritalStatus = forms.ChoiceField(
        choices=[('Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced')])
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
        # You can also Make the bellow line instead
        # fields = '__all__'



class VacationForm(forms.ModelForm):
    EmployeeID = forms.IntegerField(
        label='ID',
        widget=forms.NumberInput(
            attrs={'placeholder': 'Write your ID', 'class': 'ID', 'id': 'idInput'})
    )
    startDate = forms.DateField(
        label='Start Date',
        widget=DateInput(
            attrs={'type': 'date', 'class': 'Date', 'id': 'startD'})
    )
    endDate = forms.DateField(
        label='End Date',
        widget=DateInput(attrs={'type': 'date', 'class': 'Date', 'id': 'endD'})
    )
    reason = forms.CharField(
        label='Reason',
        widget=forms.Textarea(
            attrs={'placeholder': 'Write Your Reason', 'id': 'reason', 'class': 'Date', 'rows': 4, 'cols': 50})
    )

    class Meta:
        model = Vacation
        fields = ['EmployeeID', 'startDate', 'endDate', 'reason']
