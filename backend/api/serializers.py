from rest_framework import serializers
from event_and_award.models import Events
from news_and_stories.models import News
from form.models import ApplicationForm


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
