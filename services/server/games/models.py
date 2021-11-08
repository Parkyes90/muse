from django.db import models
from django_extensions.db.models import TimeStampedModel


class Game(TimeStampedModel):
    title = models.CharField(max_length=128)
    description = models.TextField(max_length=512)


class GameFile(TimeStampedModel):
    game = models.ForeignKey("games.Game", related_name="files", on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    file = models.FileField(upload_to="musics/")
