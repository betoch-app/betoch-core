from django.shortcuts import render
from .serializer import houseSerializer
from rest_framework.views import APIView
from .models import House
from rest_framework.response import Response
from rest_framework import status
#Get and Post class
class houseDetails(APIView):
    http_method_names = ['get', 'head', 'post']
    #Get all House Details
    def  get(self,request,format=None):
        house=House.objects.all()
        serializer=houseSerializer(house,Many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #Create House 
    def post(self,request,format=None):
        serializer=houseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(status.HTTP_400_BAD_REQUEST)
#Get by id,update ,delete class
class houseList(APIView):
    http_method_names = ['get', 'head', 'put','delete']
    #Get house by house id function
    def get_object(self,pk):
        try:
            return House.objects.get(pk)
        except House.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    #Get house by house  id
    def get(self,request,pk,format=None):
        house=self.get_object(pk)
        serializer=houseSerializer(house)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #Update House by house id
    def put(self,request,pk,format=None):
        house=self.get_object(pk)
        serializer=houseSerializer(house,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    #Delete House by House id
    def delete(self,request,pk,format=None):
        house=self.get_object(pk)
        house.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
