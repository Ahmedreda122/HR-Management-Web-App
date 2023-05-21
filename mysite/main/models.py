from django.db import models

# Create your models here.


class Employee(models.Model):
  Name = models.CharField(max_length=64)
  Email = models.CharField(max_length=64)
  Age = models.IntegerField()
  phone = models.IntegerField()
  
  # Printer for this Object (Like you make overloading to << in c++)
  # Like you Overloading print() fn to print this object in the following format
  def __str__(self):
    return f"{self.Name} | {self.Email} | {self.Age} | {self.phone}"
  