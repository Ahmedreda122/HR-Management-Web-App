from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("HrHome/", views.HrHome, name="HrHome"),
    path('MHome/', views.MHome, name='MHome'),
    path('MHome/AddHR/', views.AddHR, name='AddHR'),
    path('MHome/ShowHRs/', views.ShowHRs, name='ShowHRs'),
    path('MHome/VacationAction/', views.VacationAction, name='VacationAction'),
]
