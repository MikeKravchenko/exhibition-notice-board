from django.db import models


class JobPost(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    categories = models.CharField(max_length=100)

    contact = models.CharField(max_length=100)
    # TODO: other type, but still not other table
    applicants = models.CharField(max_length=10000, blank=True)

    class Meta:
        ordering = ['created']


