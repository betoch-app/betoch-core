from django.db import models
from users.models import Users
from renttype.models import RentType


class Company(models.Model):
    owner = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='owner_id'
    )
    company_name = models.CharField(max_length=100)
    company_logo = models.ImageField(max_length=100, null=True, blank=True)
    has_penalty = models.BooleanField(default=False)
    penalty_percent = models.FloatField(null=True, blank=True)
    rent_type = models.ForeignKey(
        RentType, on_delete=models.CASCADE, related_name='rent_type_id')
    registered_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.company_name
