from django.db import models
from  company.models import Company
from users.models import Users
class Branch(models.Model):
    branchName=models.CharField(max_length=100,blank=True,null=True)
    branchNumber=models.IntegerField()
    users=models.ForeignKey(Users, related_name="userid", on_delete=models.PROTECT)
    company=models.ForeignKey(Company,related_name="company",on_delete=models.PROTECT)
    registered_date=models.DateField(null=True,blank=True)
    status=models.CharField(max_length=20,null=True,blank=True)
    def __str__(self):
        return  self.branchName