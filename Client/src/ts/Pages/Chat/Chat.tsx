export default function Chat()
{
    let socket = new WebSocket("/api/chat/connect")
    socket.onopen = (e) => {
        console.log("connection established")
    }

    socket.onmessage = (e) => {
        console.log(e.data)
        socket.send("pong")
    }

    socket.onclose = (e) => {
        console.log("connection closed!")
        
    }

    window.onbeforeunload = () => {
        socket.close();
    }

    return (
        <>
            <p class = "text-white">hello</p>
        </>
    )
}