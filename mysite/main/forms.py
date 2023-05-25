
from django import forms
from django.forms.widgets import DateInput
from .models import Employee
from .models import HR
from .models import Vacation


class EmployeeForm(forms.ModelForm):
    ID = forms.IntegerField(label='ID')
    userName = forms.CharField(max_length=100, label='Name')
    Email = forms.EmailField(max_length=255)
    phoneNum = forms.IntegerField(label='Phone Number')
    address = forms.CharField(max_length=255)
    birthDate = forms.DateField(widget=DateInput(
        attrs={'type': 'date'}), label='Birth Date', initial='2000-01-01')
    gender = forms.ChoiceField(
        choices=[('male', 'Male'), ('female', 'Female')])
    jobTitle = forms.CharField(max_length=64, label='Job Title')
    maritalStatus = forms.ChoiceField(label='Marital Status', choices=[(
        'Single', 'Single'), ('Married', 'Married'), ('Divorced', 'Divorced')])
    salary = forms.IntegerField()
    vacationDays = forms.IntegerField(label='Vacation Days')

    class Meta:
        model = Employee
        # fields = [
        #     'ID',
        #     'userName',
        #     'Email',
        #     'phoneNum',
        #     'address',
        #     'birthDate',
        #     'gender',
        #     'jobTitle',
        #     'maritalStatus',
        #     'salary',
        #     'vacationDays',
        # ]

        fields = '__all__'
 # The constructor

    def __init__(self, *args, **kwargs):
        # Call the parent class __init__ method
        super().__init__(*args, **kwargs)
        self.fields['ID'].disabled = True
        self.fields['ID'].initial = Employee.objects.latest('ID').ID + 1
        self.order_fields([
            'ID',  # Display the 'ID' field First
            'userName',
            'Email',
            'phoneNum',
            'address',
            'birthDate',
            'gender',
            'jobTitle',
            'maritalStatus',
            'salary',
            'vacationDays',
        ])
# # Reorder the form fields
# order_fields([
#     'ID',
#     'userName',
#     'Email',
#     'phoneNum',
#     'address',
#     'birthDate',
#     'gender',
#     'jobTitle',
#     'maritalStatus',
#     'salary',
#     'vacationDays',
# ])


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


class LoginForm(forms.ModelForm):
    userName = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'placeholder': "Write Your Username"}))
    password = forms.CharField(max_length=100, widget=forms.PasswordInput(
        attrs={'placeholder': "Write Your Password"}))

    class Meta:
        model = HR
        fields = [
            'userName',
            'password'
        ]

    def clean_userName(self, *args, **kwarg):
        Hrs = HR.objects.all()
        userName = self.cleaned_data.get('userName')
        # passW = self.cleaned_data.get('password')
        for hr in Hrs:
            if (hr.userName == userName):
                return userName
        raise forms.ValidationError('The Username is Wrong.')

    def clean_password(self, *args, **kwarg):
        Hrs = HR.objects.all()
        passW = self.cleaned_data.get('password')
        for hr in Hrs:
            if (hr.password == passW):
                return passW
        raise forms.ValidationError('The Password is Wrong.')

class VacationStatusForm(forms.Form):
    status = forms.ChoiceField(
        choices=[('Approved', 'Approve'), ('Rejected', 'Reject')],
        widget=forms.RadioSelect
    )