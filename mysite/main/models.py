from django.db import models

# Create your models here
class Employee(models.Model):
  ID = models.BigAutoField(primary_key=True, default=20230000, verbose_name='ID')
  userName = models.CharField(max_length=100)
  Email = models.CharField(max_length=255)
  Age = models.IntegerField()
  phoneNum = models.IntegerField()
  address = models.CharField(max_length=255)
  birthDate = models.DateField()
  gender = models.CharField(max_length=10)
  jobTitle = models.CharField(max_length=64)
  maritalStatus = models.CharField(max_length=64)
  salary = models.IntegerField()
  vacationDays = models.IntegerField()
  
  # Printer for this Object (Like you make overloading to << in c++)
  # Like you Overloading print() fn to print this object in the following format
  def __str__(self):
    return f"ID: {self.ID}, Name: {self.userName}, Email: {self.Email}, Age: {self.Age}, Phone: {self.phoneNum}, Address: {self.address}, Birth Date: {self.birthDate}, Gender: {self.gender}, Job Title: {self.jobTitle}, Marital Status: {self.maritalStatus}, Salary: {self.salary}, Vacation Days: {self.vacationDays}"
  

class HR(models.Model):
  userName = models.CharField(max_length=100, default= "none")
  password = models.CharField(max_length=100, default="none")
  
