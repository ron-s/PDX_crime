import os
from django.contrib.gis.utils import LayerMapping
from .models import CrimeModelTemplate

crime2014_mapping = {
    'recordid' : 'RecordID',
    'date' : 'Date',
    'time' : 'Time',
    'offense' : 'Offense',
    'address' : 'Address',
    'neighborhd' : 'Neighborhd',
    'precinct' : 'Precinct',
    'district' : 'District',
    'xcoordi' : 'Xcoordi',
    'ycoordi' : 'Ycoordi',
    'geom' : 'POINT', 
}

# Copypaste from geodjango tutorial.
crime2014_shp = os.path.abspath(os.path.join(os.path.dirname(__file__), 'data', 'pdxcrime_2014.shp'))

def run(verbose=True):
    lm = LayerMapping(CrimeModelTemplate, crime2014_shp, crime2014_mapping,
                      transform=False, encoding='utf-8')

    lm.save(strict=True, verbose=verbose)