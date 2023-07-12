from django.db import models


class RentType(models.Model):
    name = models.CharField(max_length=200)
