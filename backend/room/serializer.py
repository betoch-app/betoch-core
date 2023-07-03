from dataclasses import field
from rest_framework import serializers
from .models import Room

class roomSerializer(serializers.ModelSerializer):
    class Meta:
        model=Room
        field=['__all__']