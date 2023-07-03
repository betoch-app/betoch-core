from django.db import models
from users.models import Users


class Company(models.Model):
    owner = models.ForeignKey(
        Users,
        on_delete=models.CASCADE,
        related_name='owner_id'
    )
    company_Name = models.CharField(max_length=100)
    company_Logo = models.ImageField(max_length=100, null=True, blank=True)
    has_branch = models.BooleanField(default=False)
    has_penalty = models.BooleanField(default=False)
    penalty_percent = models.FloatField(null=True, blank=True)
    registered_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.company_Name
