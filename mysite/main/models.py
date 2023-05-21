from django.db import models

# Create your models here.


class Employee(models.Model):
  Name = models.CharField(max_length=64)
  Email = models.CharField(max_length=64)
  Age = models.IntegerField()
  phone = models.IntegerField()