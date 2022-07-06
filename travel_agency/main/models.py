from django.db import models


class City(models.Model):
    img = models.ImageField(upload_to='city/%y/%m/%d/')
    title = models.CharField(max_length=200)
    description = models.TextField()
    cost = models.CharField(max_length=200)

    def __str__(self):
        return str(self.title)


class Gallery(models.Model):
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to='gallery/%y/%m/%d/')

    def __str__(self):
        return str(self.title)


class Contact(models.Model):
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return str(self.full_name + ':' + self.phone)
