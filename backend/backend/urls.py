"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from users.views import MeAPIView
from rest_framework_simplejwt import views as jwt_views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/", include('users.urls')),
    path('api/token/refresh', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path("api/me", MeAPIView.as_view()),
    # company Api
    path('api/company', include('company.urls')),
    # branch Api
    path('api/branch/', include('branch.urls')),
    # House APi
    path('api/house/', include('house.urls')),
    # Room api
    path('api/room/', include('room.urls')),
    # penality Api
    path('api/penality/', include('penality.urls')),
    path('api/rent_type', include('renttype.urls')),
    # api documentation
    path('openapi/', get_schema_view(
        title="Betoch ",
        description="API developers hpoing to use our service"
    ), name='openapi-schema'),
    path('docs/', TemplateView.as_view(
        template_name='documentation.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui')
]

urlpatterns = format_suffix_patterns(urlpatterns)
