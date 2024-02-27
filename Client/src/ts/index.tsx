import { render } from "solid-js/web"

const rootElem = document.getElementById("solidRoot")

render(() => <div class = "text-center bg-red-500">hello from SolidJS!</div>,rootElem);