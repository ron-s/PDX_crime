from django.contrib.gis.db import models

class CrimeModelTemplate(models.Model):
    recordid = models.IntegerField()
    date = models.CharField(max_length=254)
    time = models.CharField(max_length=254)
    offense = models.CharField(max_length=254)
    address = models.CharField(max_length=254)
    neighborhd = models.CharField(max_length=254)
    precinct = models.CharField(max_length=254)
    district = models.CharField(max_length=254)
    xcoordi = models.FloatField()
    ycoordi = models.FloatField()
    geom = models.PointField(srid=-1)


    def __str__(self):
        return 'Record ID:' + " " + str(self.recordid) + " " + 'Offense Type: ' + self.offense

#     class Meta:
#         abstract=True



# class Crime2014(CrimeModelTemplate):
#     """We're inheriting the whole abstract base class."""

