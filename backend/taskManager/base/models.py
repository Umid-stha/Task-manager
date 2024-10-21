from django.db import models
from django.contrib.auth.models import User

class statusChoices(models.TextChoices):
    PENDING = 'pend', "Pending" 
    COMPLETED = 'comp', "Completed"

class Task(models.Model):
    title = models.CharField(max_length=50)
    description= models.TextField(null=True, blank=True)
    due_date = models.DateField(null = True)
    status = models.CharField(
        max_length=10, 
        choices = statusChoices.choices,
        default = statusChoices.PENDING)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
