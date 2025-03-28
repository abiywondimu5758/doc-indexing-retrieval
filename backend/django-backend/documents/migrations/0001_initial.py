# Generated by Django 5.1.7 on 2025-03-17 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('language', models.CharField(choices=[('en', 'English'), ('am', 'Amharic')], max_length=2)),
                ('original_text', models.TextField()),
                ('processed_text', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
