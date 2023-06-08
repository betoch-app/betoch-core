from rest_framework import  serializers
from .models import Users
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = Users
        fields = ('full_name', 'phone', 'password')


class MyTokenObtainSerializer(TokenObtainPairSerializer):
        @classmethod
        def get_token(cls, user):
            token = super().get_token(user)
            token['phone'] = user.email
            return token