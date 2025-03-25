from django.db import models

# Create your models here.

class Document(models.Model):
    LANGUAGE_CHOICES = [
        ('en', 'English'),
        ('am', 'Amharic')
    ]
    
    title = models.CharField(max_length=255)
    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)
    original_text = models.TextField()
    processed_text = models.TextField(blank=True, null=True)
    tokenized_text = models.JSONField(null=True, blank=True)
    stopword_removed_text = models.JSONField(null=True, blank=True)
    stemmed_text = models.JSONField(null=True, blank=True)  # <-- add this field


    def __str__(self):
        return self.title

class InverseIndex(models.Model):
    term = models.CharField(max_length=255, unique=True)
    postings = models.JSONField()

    def __str__(self):
        return self.term