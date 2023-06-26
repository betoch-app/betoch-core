from django.urls import path
from .views import (AuthUserRegistrationView,
                    AuthUserLoginView, SendOTPAPIView, OTPConfirmationView, ChangePasswordApiView)

urlpatterns = [
    path('signup', AuthUserRegistrationView.as_view(), name='signup'),
    path('login', AuthUserLoginView.as_view(), name='login'),
    path('resetPassword', ChangePasswordApiView.as_view()),
    path('sendOTPCode', SendOTPAPIView.as_view()),
    path('OTPConfirmation', OTPConfirmationView.as_view()),
]
