from django.urls import path
from . import views

urlpatterns = [
    path("", views.Home, name="index"),
    path("HrHome/", views.HrHome, name="HrHome"),
    path('MHome/', views.MHome, name='MHome'),
    
    
    
    
    path('AddEmployee/', views.AddEmployee, name='AddEmployee'),
    path('ShowEmployees/', views.ShowEmployees, name='ShowEmployees'),
    path('SubmitVacation/', views.SubmitVacation, name='SubmitVacation'),
    path('ShowVacations/', views.ShowVacations, name='ShowVacations'),
]
