from .serializers import branchSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Branch
#Get And Post Methods
class BranchDetails(APIView):
    http_method_names = ['get', 'head', 'post']
    #Get all Branches
    def get(self,request,format=None):
        branch=Branch.objects.all()
        serializer=branchSerializer(branch,Many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #Create Branches
    def post(self,request,format=None):
        serializers=branchSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data,status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
#Get by id,delete,update
class BranchList(APIView):
    http_method_names = ['get', 'head', 'post']
    def  get_object(self,pk):
        try:
            return Branch.objects.get(pk)
        except Branch.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    #Get Branch by branch Id
    def get(self,request,pk,formate=None):
        branch=self.get_object(pk)
        serializer=branchSerializer(branch)
        return Response(serializer.data,status=status.HTTP_200_OK)
    #update Branch
    def put(self,request,pk,format=None):
        branch=self.get_object(pk)
        serializer=branchSerializer(branch,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def delete (self,request,pk,format=None):
        branch=self.get_object(pk)
        branch.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    
