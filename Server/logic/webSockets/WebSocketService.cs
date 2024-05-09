using System.Net.WebSockets;
using System.Text;

public class WebSocketService
{
    //private List<WebSocket> webSockets = new List<WebSocket>();
    public async Task handleSocketConnection(WebSocket socket)
    {
        //webSockets.Add(socket);

        Console.WriteLine("hello");

        await socket.SendAsync(Encoding.UTF8.GetBytes("Ping"),WebSocketMessageType.Text,false,CancellationToken.None);

        var buffer = new byte[1024 * 4];

        WebSocketReceiveResult result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer),CancellationToken.None);

        Console.WriteLine("message count:" + result.Count);
        return;

       /* await socket.SendAsync(Encoding.UTF8.GetBytes("ping"),WebSocketMessageType.Text,true,CancellationToken.None);
        Console.WriteLine("Data sent");*/

        while (!result.CloseStatus.HasValue)
        {
            Console.WriteLine(Encoding.UTF8.GetString(buffer));
            
            try
            {
                result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                Console.WriteLine(Encoding.UTF8.GetString(buffer));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            

            
        }

       


        await socket.CloseAsync(result.CloseStatus.Value,
        result.CloseStatusDescription,
        CancellationToken.None);
        //webSockets.Remove(socket);
    }
}