from rest_framework import serializers

from .models import JobPost


class JobPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = JobPost
        fields = ['id', 'title', 'description', 'categories', 'applicants', 'contact']