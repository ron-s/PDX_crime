# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-05-10 22:09
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CrimeModelTemplate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recordid', models.IntegerField()),
                ('date', models.CharField(max_length=254)),
                ('time', models.CharField(max_length=254)),
                ('offense', models.CharField(max_length=254)),
                ('address', models.CharField(max_length=254)),
                ('neighborhd', models.CharField(max_length=254)),
                ('precinct', models.CharField(max_length=254)),
                ('district', models.CharField(max_length=254)),
                ('xcoordi', models.FloatField()),
                ('ycoordi', models.FloatField()),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=-1)),
            ],
        ),
    ]
