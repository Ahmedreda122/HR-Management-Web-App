from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("HrHome/", views.HrHome, name="HrHome"),
]
