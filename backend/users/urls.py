from django.urls import path
from .views import (AuthUserRegistrationView,
                    AuthUserLoginView, OTPConfirmationView)
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('signup', AuthUserRegistrationView.as_view(), name='signup'),
    path('login', AuthUserLoginView.as_view(), name='login'),
    path('OTPConfirmation', OTPConfirmationView.as_view())
]
