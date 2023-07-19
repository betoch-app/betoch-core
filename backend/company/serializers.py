from rest_framework import serializers


from .models import Company
from branch.serializers import branchSerializer
from renttype.serializer import RentTypeSerializer


class companySerializers(serializers.ModelSerializer):
    branch = branchSerializer(many=True, read_only=True)
    rent_type = RentTypeSerializer(many=False, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'owner_id', 'company_name', 'company_logo', 'has_penalty', 'penalty_percent',
                  'registered_date', 'status', 'branch', 'rent_type')
