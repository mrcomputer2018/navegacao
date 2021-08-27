import React from "react"
import { Switch, Route }from "react-router-dom"
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import Parameter from "../../views/examples/Parameter"
import "./Content.css"

const Content = (props) => {
    return (
        <main className="Content">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/param/:id">
                    <Parameter />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}
export default Content;