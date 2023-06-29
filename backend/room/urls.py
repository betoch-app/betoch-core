from django.urls import path
from .views import (roomDetails,roomList)
urlpatterns = [
   
    path('roomApiDetails', roomDetails.as_view(),name='roomApiDetails'),
    path('roomApiList/<int:pk>/',roomList.as_view(),name='roomApiList')
   

    

]
