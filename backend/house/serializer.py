from dataclasses import fields
from rest_framework import serializers
from .models import House

class houseSerializer(serializers.ModelSerializer):
    class Meta:
        model=House
        fields=['company','branch','floorNumebr','rentPrice','peymentTerm','contratEvidenc','has_room']
        
        