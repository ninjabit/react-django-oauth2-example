from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .oauth import generate_github_access_token, convert_to_auth_token, get_user_from_token
from user_obj.serializers import UserSerializer

from django.conf import settings

# GITHUB ID AND SECRET
SOCIAL_AUTH_GITHUB_KEY = settings.SOCIAL_AUTH_GITHUB_KEY
SOCIAL_AUTH_GITHUB_SECRET = settings.SOCIAL_AUTH_GITHUB_SECRET

# OAUTH TOOLKIT ID AND SECRET
CLIENT_ID = settings.CLIENT_ID
CLIENT_SECRET = settings.CLIENT_SECRET

@api_view(['POST'])
def github_authenticate(request):
    github_token = generate_github_access_token(
        github_client_id=SOCIAL_AUTH_GITHUB_KEY,
        github_client_secret=SOCIAL_AUTH_GITHUB_SECRET,
        github_code=request.data['code']
    )
    django_auth_token = convert_to_auth_token(
        client_id=CLIENT_ID,
        client_secret=CLIENT_SECRET,
        backend='github',
        token=github_token
    )
    user = get_user_from_token(django_auth_token)

    return Response(
        {'token': django_auth_token,
         'user': UserSerializer(user).data},
        status=status.HTTP_201_CREATED
    )
