from .models import Company
from .serializers import companySerializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
#from rest_framework import permissions

#Get all Company Details and Create
#@api_view(['GET','POST'])
class companyApiDetail(APIView):
    http_method_names = ['get', 'head', 'post']

    #Get All Company
    def get(self,request, format=None):
        #Get all Company
        company=Company.objects.all()
        serializer=companySerializers(company,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def post(self,request, format=None):
        serializer=companySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        #Update Company
        #Delete Company
class companyApiList(APIView):
    #permission_classes = [permissions.IsAuthenticated]
        http_method_names = ['get', 'head', 'put','delete']
        def get_object(self, pk):
            try:
                return Company.objects.get(pk=pk)
            except Company.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        #Get Company by Id
        def get(self,request,pk,format=None):
            company=self.get_object(pk)
            serializer=companySerializers(company)       
            return Response(serializer.data,status=status.HTTP_200_OK)
            #Update Company
        def put(self,request,pk):
            company=self.get_object(pk)
            serializer=companySerializers(company,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            #Delete Company
        def delete(self,request,pk,format=None):
        
            company=self.get_object(pk)
            company.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
           
            
            
