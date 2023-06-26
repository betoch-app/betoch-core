from rest_framework import serializers
from .models import Users
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import update_last_login


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = Users
        fields = ('full_name', 'phone', 'password')

    def create(self, validated_data):
        auth_user = Users.objects.create_user(**validated_data)
        return auth_user


class UserLoginSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=15)
    password = serializers.CharField(write_only=True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate(self, data):
        phone = data['phone']
        password = data['password']
        user = authenticate(phone=phone, password=password)

        if user is None:
            raise serializers.ValidationError('Invalid login credentials')
        try:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)
            update_last_login(None, user)
            validation = {
                'access_token': access_token,
                'refresh_token': refresh_token,
                'phone': user.phone,
                'role': user.role,
            }

            return validation
        except Users.DoesNotExist:
            raise serializers.ValidationError("Invalid login credentials")


class SendOTPSerializer():
    class Meta:
        model = Users
        fields = ('phone')


class ChangePasswordSerializer(serializers.ModelSerializer):
    phone = serializers.CharField(max_length=15)
    password = serializers.CharField(max_length=100)

    class Meta:
        model = Users
        fields = ('phone', 'password')

    def save(self):
        phone = self.validated_data['phone']
        password = self.validated_data['password']
        # filtering out whether User is existing or not, if your username is existing then if condition will allow your username
        if Users.objects.filter(phone=phone).exists():
            # if your phone is existing get the query of your specific username
            user = Users.objects.get(phone=phone)
            # then set the new password for your username
            user.set_password(password)
            user.save()
            return user
        else:
            raise serializers.ValidationError(
                {'error': 'please enter valid crendentials'})


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('full_name', 'phone')
