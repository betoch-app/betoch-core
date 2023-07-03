from django.urls import path
from .views import (penalityDetails,penalityList)
urlpatterns = [
   
    path('penalityApiDetails', penalityDetails.as_view(),name='penalityApiDetails'),
    path('penalityApiList/<int:pk>/',penalityList.as_view(),name='penalityApiList')
   

    

]
