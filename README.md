# react-django-oauth2-example
An example oauth integration with reactjs frontend and a django backend with google and github login
#### Frontend - Reactjs + Redux
- [x] Implicit oauth2 flow with a google backend 
- [x] Authorization ouath2 flow with a github backend 
- [x] A protected route /secret that can only be accessed by authenticated users
- [x] Dynamic navbar displaying if the user is logged in or not
- [x] storing the access_tokens received from the Django-backend in localStorage
- [ ] not handling refresh tokens 
#### Backend - Django + Django Rest Framework
- [x] integration of django-rest-framework-social-oauth2
- [x] api endpoint /githubcode/ that sends a post request to github with query params in order to get an access token
- [x] a model backend.dog which is only accessible for authenticated users
