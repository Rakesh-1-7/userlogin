from django.db import models


# Create your models here.

class Filedatabase(models.Model):
    semester = models.CharField(max_length=255)
    course = models.CharField(max_length=255)
    notes = models.CharField(max_length=255)
    myfiles = models.FileField(upload_to="")
    display = models.CharField(max_length=255)