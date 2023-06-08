from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import  get_user_model
from .serializers import UserSerializer, MyTokenObtainSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.


class UsersAPIView(APIView):
    def get(self, request):
        User = get_user_model();
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainSerializer