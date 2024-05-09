import { effect } from "solid-js/web"

export default function Chat()
{
    effect(() => {
        let socket = new WebSocket("wss://" + window.location.hostname + "/api/chat/connect")
        socket.onopen = (e) => {
            console.log("connection established")
            socket.send("pong")

            setInterval(() => {
                socket.send("dummy data")
            },500)
        }

        socket.onmessage = (e) => {
            console.log(e.data)
        }

        socket.onclose = (e) => {
            console.log("connection closed!")
            
        }
    })

    return (
        <>
            <p class = "text-white">hello</p>
        </>
    )
}