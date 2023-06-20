from django.urls import path
from .views import (companyDetail,companyList)
urlpatterns = [
   
    path('companyApiDetails', companyDetail.as_view(),name='companyApiDetails'),
    path('companyApiList/<int:pk>/',companyList.as_view(),name='companyApiList')

    

]
