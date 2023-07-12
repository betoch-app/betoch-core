from rest_framework import serializers
from .models import RentType


class RentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentType
        fields = ('id', 'name')
