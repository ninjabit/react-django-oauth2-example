from .models import Dog

from rest_framework.serializers import ModelSerializer

class DogSerializer(ModelSerializer):
    class Meta:
        model = Dog 
        fields = ('id', 'name', 'age', 'breed')
