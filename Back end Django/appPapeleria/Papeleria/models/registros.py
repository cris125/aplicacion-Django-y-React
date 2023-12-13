from django.db import models
from .user import User

class Registros(models.Model):
    id = models.AutoField(primary_key=True)
    dateTime = models.DateTimeField()
    name = models.CharField('Name', max_length=50)
    value=models.DecimalField(decimal_places=3,max_digits=11)
    existences=models.DecimalField(decimal_places=3,max_digits=11)
    description = models.CharField('Description', max_length=100)
    photo= models.ImageField(upload_to='static/images/', null=True, blank=True)
    user = models.ForeignKey(User, related_name='registros', on_delete=models.CASCADE)