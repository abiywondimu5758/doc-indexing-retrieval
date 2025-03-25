"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from documents.views import TokenizeDocumentAPIView, StopwordDocumentAPIView, StemDocumentAPIView, UploadFileAPIView, BooleanRetrievalAPIView, VectorSpaceRetrievalAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/documents/tokenize', TokenizeDocumentAPIView.as_view(), name='tokenize-document'),
    path('api/documents/stopword', StopwordDocumentAPIView.as_view(), name='stopword-document'),
    path('api/documents/stem', StemDocumentAPIView.as_view(), name='stem-document'),
    path('api/documents/upload', UploadFileAPIView.as_view(), name='upload-file'),
path('api/documents/boolean', BooleanRetrievalAPIView.as_view(), name='boolean-document'),
    path('api/documents/vector', VectorSpaceRetrievalAPIView.as_view(), name='vector-document'),
]
