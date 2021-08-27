import React from "react"
import "./Menu.css"
import { Link } from "react-router-dom"

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                        {/*<a href="/"></a>*/}
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                         {/*<a href="/about">Sobre</a>*/}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default Menu;