from django.urls import path
from .views import (companyApiDetail,companyApiList)
urlpatterns = [
   
    path('companyDetails', companyApiDetail.as_view(),name='companyDetails'),
    path('companyList/<int:pk>/',companyApiList.as_view())
    #path('companyList/update/<int:id>/',companyApiList.updateCompanyByid),
    #path('companyList/delete/<int:id>/',companyApiList.deleteCompanyById)

    

]
