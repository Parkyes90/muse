from rest_framework import viewsets

from games.models import Game
from games.serializers import GameSerializer, GameListSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()

    def get_serializer_class(self):
        if self.action in {"list"}:
            return GameListSerializer
        return GameSerializer
