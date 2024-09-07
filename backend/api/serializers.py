from rest_framework import serializers
from event_and_award.models import Events
from news_and_stories.models import News
from form.models import ApplicationForm
from django.conf import settings
from rest_framework.exceptions import ValidationError
from django.core.mail import send_mail
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from account.models import User

User=get_user_model()


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['id', 'title', 'body', 'image']


class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'body', 'image']


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model=ApplicationForm
        fields="__all__"


class UserRegistrationSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2=serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    
    class Meta:
        model=User
        fields=('username', 'email', 'password','password2')

    def validate(self, data):
        if data['password'] !=data['password2']:
            raise ValidationError({"message": "passwords must match"})
        if User.objects.filter(username=data['username']).exists():
            raise ValidationError({"message": "Username already exists"})
        if User.objects.filter(email=data['email']).exists():
            raise ValidationError({"message":"email already exists"})
        return data
    
    def create(self, validated_data):
        user=User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        send_mail(
            'New User Registration',
            f'New User registered: {user.username}, email: {user.email}',
            'chisomzzy1@gmail.com',
            ['chisomzzy1@gmail.com'],
        )

        send_mail(
        'Welcome to our platform',
        'Thank you for registering with us!',
        'chisomzzy1@gmail.com',
        [user.email],
        )

        refresh=RefreshToken.for_user(user)

        return {
            "refresh":str(refresh),
            "access": str(refresh.access_token),
            "user":user
        }
        
        
