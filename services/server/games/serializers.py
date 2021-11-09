from rest_framework import serializers

from .models import Game, GameFile


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "title", "description", "files"]


class GameFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameFile
        fields = ["game", "title", "file"]
