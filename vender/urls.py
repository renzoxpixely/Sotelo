from django.urls import path

from . import views

urlpatterns = [
    path('vender/', views.index, name='index'),
]