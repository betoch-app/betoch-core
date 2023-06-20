from rest_framework import serializers

from .models import Company

class companySerializers(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields=('name','logo','has_branch','has_penality','penality_percent')
