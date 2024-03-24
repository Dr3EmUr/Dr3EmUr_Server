import { createEffect } from "solid-js"
import pongLogic from "./Pong-Logic"
import "./pongStyles.css"

export default function ()
{
    createEffect(() => {
        pongLogic()
    })
    

    return (
        <>
            <div class = "scoreContainer">
                <div class = "scoreText">0</div>
                <div class = "scoreText">-</div>
                <div class = "scoreText">0</div>
            </div>

            <main>
                
            </main>

        </>
    )
}