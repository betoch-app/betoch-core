from dataclasses import field
from rest_framework import serializers

from room.models import Room

class penalitySerializer(serializers.ModelSerializer):
    class Meta:
        model=Room
        field=['__all__']