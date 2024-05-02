using System.Net.WebSockets;
using System.Text;

public class WebSocketService
{
    private List<WebSocket> webSockets = new List<WebSocket>();
    public async Task addSocket(WebSocket socket)
    {
        webSockets.Add(socket);

        await socket.SendAsync(Encoding.UTF8.GetBytes("ping"),WebSocketMessageType.Text,true,CancellationToken.None);
        Console.WriteLine("Data sent");

        var buffer = WebSocket.CreateServerBuffer(1024);
        WebSocketReceiveResult result;

        do
        {
            result = await socket.ReceiveAsync(buffer, CancellationToken.None);
        } while (result.Count != 0);

        

        await socket.CloseOutputAsync(WebSocketCloseStatus.NormalClosure,null,CancellationToken.None);

        webSockets.Remove(socket);
    }
}