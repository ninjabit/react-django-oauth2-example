from django.contrib.auth.models import User

from rest_framework.serializers import ModelSerializer

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'username','first_name', 'last_name', 'email',
            'last_login', 'date_joined'
        )
