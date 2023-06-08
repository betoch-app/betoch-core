from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (UserRegistrationSerializer, UserLoginSerializer, UserListSerializer)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from .models import Users


class AuthUserRegistrationView(APIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        valid = serializer.is_valid(raise_exception=True)
        if valid:
            serializer.save()
            status_code = status.HTTP_200_OK
            response = {
                "success": True,
                "message": "User registered successfully",
                "user": serializer.data
            }
            return Response(response, status=status_code)


class AuthUserLoginView(APIView):
    serialize_class = UserLoginSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serialize_class(data=request.data)
        valid = serializer.is_valid(raise_exception=True)

        if valid:
            status_code = status.HTTP_200_OK
            response = {
                "success": True,
                "access_token": serializer.data['access_token'],
                "refresh_token": serializer.data['refresh_token'],
                "user": {
                    "phone": serializer.data['phone'],
                    "role": serializer.data['role']
                }
            }

            return Response(response, status=status_code)


class UserListView(APIView):
    serializer_class = UserListSerializer
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = request.user
        if user.role != 1:
            response = {
                'success': False,
                'status_code': status.HTTP_403_FORBIDDEN,
                'message': 'You are not authorized to perform this action'
            }
            return Response(response, status=status.HTTP_403_FORBIDDEN)
        else:
            users = Users.objects.all()
            serializer = self.serializer_class(users, many=True)
            response = {
                'users': serializer.data
            }

            return Response(response, status=status.HTTP_200_OK)