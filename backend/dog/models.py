from django.db import models

class Dog(models.Model):
    name = models.CharField(max_length=155)
    age = models.IntegerField()
    breed = models.CharField(max_length=155)

    def __str__(self):
        return self.name
