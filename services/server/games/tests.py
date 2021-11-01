from channels.routing import URLRouter
from channels.testing import ChannelsLiveServerTestCase, WebsocketCommunicator

from .routing import websocket_urlpatterns

application = URLRouter(websocket_urlpatterns)


class GameTests(ChannelsLiveServerTestCase):
    async def test_connect(self):
        communicator = WebsocketCommunicator(application, "/ws/games/test")
        connected, _ = await communicator.connect()
        self.assertTrue(connected)
