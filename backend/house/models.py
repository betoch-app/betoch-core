from django.db import models
from company.models import Company
from branch.models import Branch
class House(models.Model):
    company=models.ForeignKey(Company,verbose_name=("company"),on_delete=models.PROTECT)
    branch=models.ForeignKey(Branch,verbose_name=("branch"),on_delete=models.PROTECT)
    floorNumebr=models.CharField(null=True,blank=True)
    rentPrice=models.CharField()
    peymentTerm=models.DurationField(null=True,blank=True)
    contratEvidenc=models.ImageField(max_length=100,null=True,blank=True)
    has_room=models.BooleanField(null=True,blank=True)
    def __str__(self) :
        return self.floorNumebr