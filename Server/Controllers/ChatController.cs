using System.Net;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("{Controller}/{Action}")]
public class ChatController : ControllerBase
{
    public async void Index()
    {
        if (!HttpContext.WebSockets.IsWebSocketRequest)
        {
            HttpContext.Response.StatusCode = 400;
            return;
        }

        WebSocket socket = await HttpContext.WebSockets.AcceptWebSocketAsync();

         // Implement everything

    }
}