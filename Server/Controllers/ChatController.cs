using System.Net;
using System.Net.WebSockets;
using System.Text;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api/{Controller}/{Action}")]
public class ChatController : ControllerBase
{
    public async void Connect(WebSocketService socketService)
    {
        Console.WriteLine("chat api invoked");
        if (!HttpContext.WebSockets.IsWebSocketRequest)
        {
            HttpContext.Response.StatusCode = 400;
            await HttpContext.Response.CompleteAsync();
            return;
        }

        try
        {
            WebSocket socket = await HttpContext.WebSockets.AcceptWebSocketAsync();
            Console.WriteLine("hello");

            await socket.SendAsync(Encoding.UTF8.GetBytes("Ping"),WebSocketMessageType.Text,false,CancellationToken.None);

            var buffer = new byte[1024 * 4];

            WebSocketReceiveResult result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer),CancellationToken.None);

            Console.WriteLine("message count:" + result.Count);
            
            await socket.CloseAsync(WebSocketCloseStatus.NormalClosure,
            result.CloseStatusDescription,
            CancellationToken.None);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}