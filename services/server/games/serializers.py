import os
import uuid

from django.db import transaction
from rest_framework import serializers, exceptions
from django.utils.translation import gettext

from .models import Game, GameFile


class GameFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameFile
        fields = ["title", "file", "game"]


class GameListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "title", "description"]


class GameSerializer(serializers.ModelSerializer):
    game_files = GameFileSerializer(many=True, read_only=True)
    files = serializers.ListSerializer(child=serializers.FileField(), write_only=True, required=False)

    class Meta:
        model = Game
        fields = ["id", "title", "description", "game_files", "files"]

    @transaction.atomic()
    def create(self, validated_data):
        request = self.context.get("request")
        files = request.FILES.getlist("files")
        if not files:
            raise exceptions.ValidationError(detail=gettext("게임 업로드 파일을 1개 이상 등록하셔아 합니다."))
        game = super().create(validated_data)
        game_files = []
        for file in files:
            origin = file.name
            _, ext = os.path.splitext(origin)
            file.name = f"{uuid.uuid4()}{ext}"
            game_files.append({"file": file, "title": origin, "game": game.id})
        serializer = GameFileSerializer(many=True, data=game_files)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return game
