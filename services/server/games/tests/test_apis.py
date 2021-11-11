import os
import copy

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, URLPatternsTestCase, APIRequestFactory
from django.core.files.uploadedfile import SimpleUploadedFile

from django.conf import settings
from ..models import Game
from ..urls import urlpatterns


class GameTests(APITestCase, URLPatternsTestCase):
    urlpatterns = urlpatterns

    def setUp(self) -> None:
        self.api_factory = APIRequestFactory()
        self.game = Game.objects.create(title="test1", description="test1")
        self.list_url = reverse("game-list")
        self.detail_url = reverse("game-detail", args=[self.game.id])

    def test_list_game(self):
        """
        Ensure we can read game list
        """
        response = self.client.get(self.list_url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(len(response.data) > 0)

    def test_retrieve_game_with_successful(self):
        """
        Ensure we can read a valid game
        """
        response = self.client.get(self.detail_url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.game.title, response.data["title"])

    def test_create_game_with_successful(self):
        """
        Ensure we can create a game
        """
        mp3 = SimpleUploadedFile(
            "example.mp3",
            open(os.path.join(settings.BASE_DIR, "core", "tests", "files", "file_example.mp3"), "rb").read(),
            content_type="audio/mp3",
        )

        payload = {"title": "test2", "description": "test2", "files": [mp3, copy.deepcopy(mp3), copy.deepcopy(mp3)]}
        response = self.client.post(self.list_url, data=payload, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
