from channels.routing import URLRouter
from channels.testing import ChannelsLiveServerTestCase, WebsocketCommunicator
from django.urls import re_path

from games.consumers import GameConsumer

application = URLRouter(
    [re_path(r"ws/games/(?P<room_name>\w+)/?$", GameConsumer.as_asgi())]
)


class GameTests(ChannelsLiveServerTestCase):
    async def test_connect(self):
        communicator = WebsocketCommunicator(application, "/ws/games/test")
        connected, _ = await communicator.connect()
        self.assertTrue(connected)
