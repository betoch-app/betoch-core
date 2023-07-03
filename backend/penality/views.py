from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from penality.models import Penality
from .serializer import penalitySerializer

#Get all penalit and post Penalit
class penalityDetails(APIView):
    http_method_names=['get','head','post']
    #Get all Penality
    def get(self,request,format=None):
        penality=Penality.objects.all()
        serializer=penalitySerializer(penality,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #Create Penality
    def post(self,request,format=None):
        serializer=penalitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
#get penality by penality id ,update,delete
class penalityList(APIView):
    http_method_names=['get','head','put','delete']
    #Get penality by id function
    def get_object(self,pk):
        try:
            return Penality.objects.get(pk)
        except Penality.DoesNotExist:
            return Response(status=status.HTTP_204_NO_CONTENT)
    #Get penality by penality id
    def get(self,request,pk,format=None):
        penality=self.get_object(pk)
        serializer=penalitySerializer(penality)
        if serializer.is_valid():
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
        
    #update Penality by penality id
    def put(self,request,pk,format=None):
        penality=self.get_object(pk)
        serializer=penalitySerializer(penality,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    #Delete Penality by penality id
    def delete(self,request,pk,format=None):
        penality=self.get_object(pk)
        penality.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)