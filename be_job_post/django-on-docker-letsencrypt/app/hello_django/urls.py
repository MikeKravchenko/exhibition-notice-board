from django.shortcuts import render

from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

from django.views.generic.base import TemplateView

from rest_framework import routers
from .jobs_api import views

router = routers.DefaultRouter()
router.register(r'jobs/', views.JobPostViewSet)

def index(request):
   return render(request,'index.html')

urlpatterns = [
    # path('', include(router.urls))
    path('jobs/', views.JobPostViewSet.as_view({'get': 'list', 'post': 'create', 'put': 'update'})),
    path('jobs/<int:pk>/', views.JobPostViewSet.as_view({'put': 'update'})),
    path('', index, name="home"),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
