from pyexpat import model
from django.db import models
from house.models import House
class Room(models.Model):
    room_Code=models.CharField(max_length=50,blank=True,null=True)
    room_Number=models.IntegerField(blank=True,null=True)
    rental_Price=models.FloatField(blank=True,null=True)
    Total_Paid=models.FloatField(blank=True,null=True)
    contrat_Evidence=models.ImageField(max_length=100,blank=True,null=True)
    registered_date=models.DateTimeField(blank=True,null=True)
    status=models.CharField(max_length=20,blank=True,null=True)
    houseId=models.ForeignKey(House,verbose_name=('houseid'),null=True,blank=True,on_delete=models.PROTECT)
    def __str__(self) :
        return self.room_Code