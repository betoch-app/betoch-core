from django.urls import path
from .views import (companyDetail, companyList)
urlpatterns = [

    path('', companyDetail.as_view(), name='company'),
    path('companyApiList/<int:pk>/', companyList.as_view(), name='companyApiList')



]
