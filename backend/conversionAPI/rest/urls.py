from django.urls import path 
from . import views

app_name = 'rest'
urlpatterns = [
    path('', views.getConversions),
    path('create/', views.createConversion),
    path('delete/<int:pk>/', views.deleteConversion)
]