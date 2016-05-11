from django.shortcuts import render
from rest_framework import viewsets, filters
from .models import CrimeModelTemplate
from .serializers import (
    Crime2014DataSerializer, 
    )

"""
View Controller objects that render serialized GeoJSON data through the Django
REST GIS framework.
"""
class CrimeDataViewSet(viewsets.ModelViewSet):
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('offense', 'date', 'time', 'neighborhd')
    class Meta:
        abstract=True


class Crime2014DataViewSet(CrimeDataViewSet):
    queryset = CrimeModelTemplate.objects.all()
    serializer_class = Crime2014DataSerializer


# class Crime2013DataViewSet(CrimeDataViewSet):
#     queryset = Crime2013.objects.all()
#     serializer_class = Crime2013DataSerializer


# class Crime2012DataViewSet(CrimeDataViewSet):
#     queryset = Crime2012.objects.all()
#     serializer_class = Crime2012DataSerializer


# class Crime2011DataViewSet(CrimeDataViewSet):
#     queryset = Crime2011.objects.all()
#     serializer_class = Crime2011DataSerializer


# class Crime2010DataViewSet(CrimeDataViewSet):
#     queryset = Crime2010.objects.all()
#     serializer_class = Crime2010DataSerializer

def home_page(request):
    return render(request, 'index.html')