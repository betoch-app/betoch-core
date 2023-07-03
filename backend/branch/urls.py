from django.urls import path
from .views import (BranchDetails,BranchList)
urlpatterns = [
   
    path('branchDetails', BranchDetails.as_view(),name='companyDetails'),
    path('branchList/<int:pk>/',BranchList.as_view())
    
    

]
