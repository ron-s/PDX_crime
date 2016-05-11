from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import CrimeModelTemplate

"""
Serializes geospatial fields from models into GeoJSON data.
"""
class CrimeDataSerializer(GeoFeatureModelSerializer):
    class Meta:
        geo_field = 'geom'
        fields = ('offense', 'date', 'time', 'neighborhd')
        abstract = True


class Crime2014DataSerializer(CrimeDataSerializer):
    class Meta(CrimeDataSerializer.Meta):
        model = CrimeModelTemplate

