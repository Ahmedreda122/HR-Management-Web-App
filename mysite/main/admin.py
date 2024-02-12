from django import forms
from django.contrib import admin
from .models import Employee, HR, Manager, Vacation

# Register your models here.
admin.site.register(Employee)
admin.site.register(HR)
admin.site.register(Manager)
admin.site.register(Vacation)
# Username: test
# Email address: ahmadreda@gmail.com
# Password: test
