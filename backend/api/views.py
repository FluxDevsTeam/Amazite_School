# Create your views here.
from django.shortcuts import render, get_object_or_404
from event_and_award.models import Events
from news_and_stories.models import News
from rest_framework.decorators import api_view
from .serializers import EventSerializer, NewSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination


# THIS IS THE VIEWS FOR THE EVENTS
@api_view(['POST'])
# @permission_classes([IsAdminUser])
def create_events(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": serializer.data}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def event_list(request):
    events = Events.objects.all()
    res_per_page = 6
    paginator = PageNumberPagination()
    paginator.page_size = res_per_page
    queryset = paginator.paginate_queryset(events, request)
    serializer = EventSerializer(queryset, many=True)
    return Response({"resperpage": res_per_page, "data": serializer.data}, status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_events(request, pk):
    try:
        events = Events.objects.get(pk=pk)
    except Events.DoesNotExist:

        return Response({"detail": "details not found"}, status=status.HTTP_404_NOT_FOUND)
    serializer = EventSerializer(events, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_events(request, pk):
    events = get_object_or_404(Events, pk=pk)
    events.delete()
    return Response({"message": f" The event :{events.title} was deleted successfully"},
                    status=status.HTTP_204_NO_CONTENT)


# THIS IS THE VIEWS FOR THE NEWS AND STORIES


@api_view(['POST'])
def create_news(request):
    serializer = NewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "News created successfully", "data": serializer.data},
                        status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def news_list(request):
    news = News.objects.all()
    res_per_page = 6
    paginator = PageNumberPagination()
    paginator.page_size = res_per_page
    queryset = paginator.paginate_queryset(news, request)
    serializer = NewSerializer(queryset, many=True)
    return Response({"resperpage": res_per_page, "data": serializer.data}, status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_news(request, pk):
    try:
        news = News.objects.get(pk=pk)
    except News.DoesNotExist:

        return Response({"detail": "details not found"}, status=status.HTTP_404_NOT_FOUND)
    serializer = NewSerializer(news, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_news(request, pk):
    news = get_object_or_404(News, pk=pk)
    news.delete()
    return Response({"message": f" The topic:{news.title} was deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
