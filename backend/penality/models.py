from django.db import models
from house.models import House
from room.models import Room
class Penality(models.Model):
    houseid=models.ForeignKey(House,verbose_name=("houseid"),blank=True,null=True,on_delete=models.PROTECT)
    roomid=models.ForeignKey(Room,verbose_name=("roomid"),blank=True,null=True,on_delete=models.PROTECT)
    Number_of_penality_date=models.FloatField(blank=True,null=True)
    penality_amount=models.FloatField(blank=True,null=True)
    paid_date=models.DateTimeField(null=True,blank=True)
    status=models.CharField(max_length=20,blank=True,null=True)
    
    def __int__(self) :
        return self.penality_amount