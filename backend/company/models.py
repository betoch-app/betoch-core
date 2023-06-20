from django.db import models


class Company(models.Model):
    companyName=models.CharField(max_length=100)
    companyLogo=models.ImageField( max_length=100,null=True, blank=True)
    has_branch=models.BooleanField(default=False)
    has_penality=models.BooleanField(default=False)
    penality_percent=models.FloatField()
    def __str__(self) :
        return self.companyName