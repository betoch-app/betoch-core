from pyexpat import model
from django.db import models
from house.models import House


class Room(models.Model):
    room_code = models.CharField(max_length=50, blank=True, null=True)
    room_number = models.IntegerField(blank=True, null=True)
    rental_price = models.FloatField(blank=True, null=True)
    Total_Paid = models.FloatField(blank=True, null=True)
    contract_Evidence = models.ImageField(
        max_length=100, blank=True, null=True)
    registered_date = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=20, blank=True, null=True)
    house_id = models.ForeignKey(House, verbose_name=(
        'house_id'), null=True, blank=True, on_delete=models.PROTECT)

    def __str__(self):
        return self.room_Code
