from rest_framework import serializers

from branch.models import Branch

class branchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ('__all__')