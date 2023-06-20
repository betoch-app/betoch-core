from django.db import models
from  company.models import Company
from users.models import Users
class Branch(models.Model):
    branchName=models.CharField(max_length=100,blank=True,null=True)
    branchNumber=models.IntegerField()
    users=models.ForeignKey(Users, verbose_name=("user"), on_delete=models.PROTECT)
    company=models.ForeignKey(Company,verbose_name=("company"),on_delete=models.PROTECT)
    def __str__(self):
        return  self.branchName