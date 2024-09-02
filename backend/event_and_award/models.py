from django.db import models
from django.contrib.auth.models import User


class Events(models.Model):
    title = models.CharField(max_length=250)
    body = models.TextField()
    image = models.ImageField(upload_to='images/', blank=False)

    class Meta:
        verbose_name = 'Events'
        verbose_name_plural = 'Events'

    def __str__(self):
        return self.title
