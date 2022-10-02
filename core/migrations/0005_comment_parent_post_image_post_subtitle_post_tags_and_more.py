# Generated by Django 4.0.6 on 2022-09-18 08:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('taggit', '0005_auto_20220424_2025'),
        ('core', '0004_post_featured'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.comment'),
        ),
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='default.png', null=True, upload_to='images/'),
        ),
        migrations.AddField(
            model_name='post',
            name='subtitle',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='active',
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='body',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='featured',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='name',
            field=models.CharField(max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='post',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='featured',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='publish',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(max_length=250, null=True, unique_for_date='publish'),
        ),
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=5000, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
