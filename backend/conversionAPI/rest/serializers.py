from .models import Conversion, Unit
from rest_framework import serializers

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ('symbol', 'name')

class ConversionSerializer(serializers.ModelSerializer):
    from_unit = UnitSerializer()
    to_unit = UnitSerializer()
    
    class Meta:
        model = Conversion
        fields = '__all__'