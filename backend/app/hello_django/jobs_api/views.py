from rest_framework import mixins, viewsets
from rest_framework import permissions

from django.http import Http404
from rest_framework.response import Response
from rest_framework import status

from .models import JobPost
from .serializers import JobPostSerializer



class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
