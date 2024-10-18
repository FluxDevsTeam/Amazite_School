from django.urls import path
from . import views




urlpatterns = [
    # urls for event and awards
    path('create-events/', views.create_events, name='create-events'),
    path('event-list/', views.event_list, name='event-list'),
    path('update-event/<str:pk>/', views.update_events, name='update-events'),
    path('delete-event/<str:pk>/', views.delete_events, name='delete-events'),

    # urls for news and stories
    path('create-news/', views.create_news, name='create-news'),
    path('news-list/', views.news_list, name='news-list'),
    path('update-news/<str:pk>/', views.update_news, name='update-news'),
    path('delete-news/<str:pk>/', views.delete_news, name='delete-news'),
    
    #this is for the application form
    path('apply/', views.apply, name='apply'),
    path('register/',views.register_user, name='register'),
    path('logout/', views.logout, name='logout'),
    path('users/<int:pk>/update/', views.update_user, name='update_user'),
    path('users/<int:pk>/delete/', views.delete_user, name='delete_user'),
    path('users/', views.list_users, name='list_users'),
]

