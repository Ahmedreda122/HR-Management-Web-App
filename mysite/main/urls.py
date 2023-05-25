from django.urls import path
from . import views

urlpatterns = [
    path("index/", views.index, name="index"),
    path("index2/", views.index2, name="index2"),
    path("", views.Home, name="Home"),
    path("HrHome/", views.HrHome, name="HrHome"),
    path('MHome/', views.MHome, name='MHome'),
    path('MHome/AddHR/', views.AddHR, name='AddHR'),
    path('MHome/ShowHRs/', views.ShowHRs, name='ShowHRs'),
    path('UpdateDeleteHR/', views.UpdateDeleteHR, name='UpdateDeleteHR'),
    path('MHome/VacationAction/', views.VacationAction, name='VacationAction'),
    path('UpdateStatus/<int:vacationID>/', views.UpdateVacationStatus, name='UpdateStatus'),
    path('AddEmployee/', views.AddEmployee, name='AddEmployee'),
    path('ShowEmployees/', views.ShowEmployees, name='ShowEmployees'),
    path('UpdateDeleteEMP/<int:id>/', views.UpdateDeleteEMP, name='UpdateDeleteEMP'),
    path('DeleteEMP/<int:id>/', views.DeleteEMP, name='DeleteEMP'),
    path('SubmitVacation/', views.SubmitVacation, name='SubmitVacation'),
    path('ShowVacations/', views.ShowVacations, name='ShowVacations'),
]
