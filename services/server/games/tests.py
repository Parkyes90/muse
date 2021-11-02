from channels.routing import URLRouter
from channels.testing import ChannelsLiveServerTestCase, WebsocketCommunicator

from .routing import websocket_urlpatterns

application = URLRouter(websocket_urlpatterns)


class GameTests(ChannelsLiveServerTestCase):
    async def get_connected_communicator(self):
        communicator = WebsocketCommunicator(application, "/ws/games/test")
        connect_result = await communicator.connect()
        return communicator, connect_result

    async def test_connect(self):
        _, connect_result = await self.get_connected_communicator()
        connected, _ = connect_result
        self.assertTrue(connected)

    async def test_send_message(self):
        communicator, _ = await self.get_connected_communicator()
        message = "test"
        await communicator.send_json_to({"message": message})
        response = await communicator.receive_json_from()
        self.assertEqual(response["message"], message)
