from django.shortcuts import render
from .models import RentType
from .serializer import RentTypeSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class RentTypeAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        rent_types = RentType.objects.all()
        serializer = RentTypeSerializer(rent_types, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
