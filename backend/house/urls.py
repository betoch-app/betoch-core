from django.urls import path
from .views import (houseDetails,houseList)
urlpatterns = [
   
    path('houseApiDetails', houseDetails.as_view(),name='houseApiDetails'),
    path('houseApiList/<int:pk>/',houseList.as_view(),name='houseApiList')
    #path('companyList/update/<int:id>/',companyApiList.updateCompanyByid),
    #path('companyList/delete/<int:id>/',companyApiList.deleteCompanyById)

    

]
