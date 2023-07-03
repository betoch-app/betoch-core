from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Room
from .serializer import roomSerializer
# Get and Post


class roomDetails(APIView):
    http_method_names = ['get', 'head', 'post']
    # Get all room

    def get(self, request, format=None):
        room = Room.objects.all()
        serializer = roomSerializer(room, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Create Room

    def post(self, request, format=None):
        serializer = roomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
# Get room by id,update and delete


class roomList(APIView):
    # get room by id function
    def get_object(self, pk):
        try:
            return Room.objects.get(pk)
        except Room.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    # Get room by id

    def get(self, request, pk, format=None):
        room = self.get_object(pk)
        serializer = roomSerializer(room)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Update Room by room id

    def put(self, request, pk, format=None):
        room = self.get_object(pk)
        serializer = roomSerializer(room, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    # Delete room by room id

    def delete(self, request, pk, format=None):
        room = self.get_object(pk)
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
