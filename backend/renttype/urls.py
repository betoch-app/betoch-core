from django.urls import path
from .views import RentTypeAPIView

urlpatterns = [
    path('', RentTypeAPIView.as_view())
]
