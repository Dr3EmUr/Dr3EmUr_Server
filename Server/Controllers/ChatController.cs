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
            return;
        }

        using (WebSocket socket = await HttpContext.WebSockets.AcceptWebSocketAsync())
        await socketService.addSocket(socket);
    }
}