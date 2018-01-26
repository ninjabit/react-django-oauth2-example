# react-django-oauth2-example
An example oauth integration with reactjs frontend and a django backend with google and github login

## how to check out locally
#### Backend folder
1. git clone the repository
2. cd backend -> virtualenv venv -> activate -> pip install -r requirements.txt
3. create a .env file in the clear_dj backend folder and paste your django secret key: SECRET_KEY='your_secret_key'
4. run python manage.py makemigrations and python manage.py migrate and python manage.py createsuperuser
5. log into the /admin panel and create an application refering to https://github.com/PhilipGarnero/django-rest-framework-social-oauth2
6. open your .env file in the clear_dj folder and paste your CLIENT_ID and CLIENT_SECRET from the created application: CLIENT_ID="your_oauth_toolkit_applicationID", CLIENT_SECRET="your_oauth_toolkit_applicationSECRET"
7. in your .env file place the google and github KEY and SECRET from the google and github applications registered on https://console.developers.google.com/ and https://github.com/settings/developers SOCIAL_AUTH_GOOGLE_OAUTH2_KEY="your_google_oauth2_key" SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET='your_google_oauth2_secret' and  SOCIAL_AUTH_GITHUB_KEY='your_guthub_key' SOCIAL_AUTH_GITHUB_SECRET="your_github_secret"
8. open your django api at the endpoint /dogs/ and create some model instances for this permissons.IsAuthenticated route
#### Frontend folder
1. cd frontend -> npm install
2. open the src/actions/googleAuthActions.js module and paste your django oauth toolkit id and secret into the django_client_id and django_client_secret variables
3. if you want you can switch your Google and Github login button clientIds
4. npm start and you should be able to log in with google and github

#### Frontend - Reactjs + Redux
- [x] Implicit oauth2 flow with a google backend 
- [x] Authorization ouath2 flow with a github backend 
- [x] A protected route /secret that can only be accessed by authenticated users
- [x] Dynamic navbar displaying if the user is logged in or not
- [x] storing the access_tokens received from the Django-backend in localStorage
- [x] handling refresh tokens 
- [ ] error handling
#### Backend - Django + Django Rest Framework
- [x] integration of django-rest-framework-social-oauth2
- [x] api endpoint /githubcode/ that sends a post request to github with query params in order to get an access token
- [x] a model backend.dog which is only accessible for authenticated users
- [x] handling refresh tokens 
- [ ] testing and error handling
