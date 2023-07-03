from django.db import models
from company.models import Company
from branch.models import Branch


class House(models.Model):
    company = models.ForeignKey(Company, verbose_name=(
        "companyid"), on_delete=models.PROTECT, null=True, blank=True)
    branch = models.ForeignKey(Branch, verbose_name=(
        "branchid"), on_delete=models.PROTECT, null=True, blank=True)
    floor_number = models.CharField(null=True, blank=True)
    rent_Price = models.CharField()
    payment_Term = models.DurationField(null=True, blank=True)
    contract_evidence = models.ImageField(
        max_length=100, null=True, blank=True)
    has_room = models.BooleanField(null=True, blank=True)
    registered_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.floor_number
