from django.db import models
from company.models import Company
from branch.models import Branch
class House(models.Model):
    companyId=models.ForeignKey(Company,verbose_name=("company"),on_delete=models.PROTECT,null=True,blank=True)
    branch=models.ForeignKey(Branch,verbose_name=("branch"),on_delete=models.PROTECT,null=True,blank=True)
    floor_Numebr=models.CharField(null=True,blank=True)
    rent_Price=models.CharField()
    peyment_Term=models.DurationField(null=True,blank=True)
    contrat_Evidenc=models.ImageField(max_length=100,null=True,blank=True)
    has_room=models.BooleanField(null=True,blank=True)
    def __str__(self) :
        return self.floor_Numebr