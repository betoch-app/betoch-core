from utils.OTPMessageHandler import send_confirmation_code, confirm_otp_code
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (UserRegistrationSerializer, SendOTPSerializer,
                          UserLoginSerializer, ChangePasswordSerializer, UserListSerializer)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from .models import Users


class AuthUserRegistrationView(APIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        valid = serializer.is_valid()

        if valid:
            serializer.save()

            # send OTP confirmation code
            response = send_confirmation_code(
                request.data['phone'])
            return Response({
                'status': response['success'],
                'message': response['message'],
                'data': serializer.data
            }, status=status.HTTP_200_OK)

        errors = {}
        for field_name, field_errors in serializer.errors.items():
            errors[field_name] = field_errors[0]
        return Response(errors, status=status.HTTP_403_FORBIDDEN)


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


class OTPConfirmationView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request):
        receiver_phone = request.data['receiver_phone']
        SMS_API_response = confirm_otp_code(
            code=request.data['code'], receiver_phone=receiver_phone)

        # generate JWT token after OTP verification
        if SMS_API_response['status'] == True:
            user = Users.objects.get(phone=receiver_phone)
            refresh_token = RefreshToken.for_user(user)
            return Response({
                'status': SMS_API_response['status'],
                'message': SMS_API_response['message'],
                'data': {
                    'refresh': str(refresh_token), 'access_token': str(
                        refresh_token.access_token)
                }
            }, status=status.HTTP_200_OK)

        return Response({'status': False, 'message': "OTP verification failed"}, status=status.HTTP_403_FORBIDDEN)


class SendOTPAPIView(APIView):
    serializer_class = SendOTPSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        receiver_phone = request.data['receiver_phone']
        if Users.objects.filter(phone=receiver_phone).exists:
            # send OTP confirmation code
            response = send_confirmation_code(
                receiver_phone)
            return Response({
                'status': response['success'],
                'message': response['message'],
                'data': {
                    'phone': receiver_phone
                }
            }, status=status.HTTP_200_OK)

        return Response({'status': False, 'message': "No one is registered by this phone number"})


class ChangePasswordApiView(APIView):
    serialize_class = ChangePasswordSerializer
    permission_classes = (AllowAny, )

    def post(self, request):
        serializer = self.serialize_class(data=request.data)
        valid = serializer.is_valid(raise_exception=True)
        if valid:
            # change password
            serializer.save()

            # create access_token
            user = Users.objects.get(phone=request.data['phone'])
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)
            return Response({'status': True, 'message': "Password changed successfully", 'data': {
                'refresh': str(refresh_token), 'access_token': str(
                    access_token)
            }}, status=status.HTTP_200_OK)
        return Response({'status': False, 'message': "No one is registered by this phone"}, status=status.HTTP_403_FORBIDDEN)


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
