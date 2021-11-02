from channels.routing import URLRouter
from channels.testing import ChannelsLiveServerTestCase, WebsocketCommunicator

from .routing import websocket_urlpatterns

application = URLRouter(websocket_urlpatterns)


class GameTests(ChannelsLiveServerTestCase):
    async def test_connect(self):
        communicator = WebsocketCommunicator(application, "/ws/games/test")
        connected, _ = await communicator.connect()
        self.assertTrue(connected)

    async def test_send_message(self):
        communicator = WebsocketCommunicator(application, "/ws/games/test")
        await communicator.connect()
        message = "test"
        await communicator.send_json_to({"message": message})
        response = await communicator.receive_json_from()
        self.assertEqual(response["message"], message)
