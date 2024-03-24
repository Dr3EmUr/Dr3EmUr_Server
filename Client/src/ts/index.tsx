import { render } from "solid-js/web"
import { Route, Router } from "@solidjs/router";
import Home from "./Pages/Home/Home";
import ContentSection from "./Pages/Home/ContentSection";
import Pong from "./Pages/Pong/Pong";

const rootElem = document.querySelector("body")

render(() =>
    <Router>
        <Route path={["/", "Home"]} component={Home}></Route>
        <Route path = "Pong" component={Pong}></Route>
    </Router>,
rootElem);