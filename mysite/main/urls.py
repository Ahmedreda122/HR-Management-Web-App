from django.urls import path
from . import views

urlpatterns = [
    path("index/", views.index, name="index"),
    path("", views.Home, name="Home"),
    path("HrHome/", views.HrHome, name="HrHome"),
    path('MHome/', views.MHome, name='MHome'),
    path('MHome/AddHR/', views.AddHR, name='AddHR'),
    path('MHome/ShowHRs/', views.ShowHRs, name='ShowHRs'),
    path('MHome/VacationAction/', views.VacationAction, name='VacationAction'),
    path('AddEmployee/', views.AddEmployee, name='AddEmployee'),
    path('ShowEmployees/', views.ShowEmployees, name='ShowEmployees'),
    path('ShowEmployees/UpdateDeleteEmployee/', views.UpdateDeleteEMP, name='UpdateDeleteEmployee'),
    path('SubmitVacation/', views.SubmitVacation, name='SubmitVacation'),
    path('ShowVacations/', views.ShowVacations, name='ShowVacations'),
]
