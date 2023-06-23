from rest_framework import serializers


from .models import Company
from branch.serializers import  branchSerializer

class companySerializers(serializers.ModelSerializer):
    branch=branchSerializer(many=True,read_only=True)
    class Meta:
        model=Company
        fields=('id','company_Name','company_Logo','has_branch','has_penality','penality_percent',
                'registered_date','status','branch')
