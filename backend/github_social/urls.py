from django.conf.urls import url
from github_social import views

urlpatterns = [
    url(r"^githubcode/$", views.github_authenticate, name='github-authenticate'),
]
