from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Dog
from .serializers import DogSerializer

class DogList(ListCreateAPIView):
	queryset = Dog.objects.all()
	serializer_class=DogSerializer
	permission_classes = (IsAuthenticated, )
