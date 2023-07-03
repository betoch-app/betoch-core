from django.db import models
from house.models import House
from room.models import Room


class Penality(models.Model):
    house_id = models.ForeignKey(House, verbose_name=(
        "house_id"), blank=True, null=True, on_delete=models.PROTECT)
    room_id = models.ForeignKey(Room, verbose_name=(
        "room_id"), blank=True, null=True, on_delete=models.PROTECT)
    number_of_penalty_date = models.FloatField(blank=True, null=True)
    penalty_amount = models.FloatField(blank=True, null=True)
    paid_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, blank=True, null=True)

    def __int__(self):
        return self.penalty_amount
