import React from "react"
import { Link } from "gatsby"

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="main-navbar">
                    <Link className="nav-link" to="https://andreasboscariol.com/">/home</Link>
                    <Link className="nav-link" to="https://andreasboscariol.com/about">/about</Link>
                    <Link className="nav-link" to="https://andreasboscariol.com/projects">/projects</Link>
                    <Link className="nav-link" to="https://andreasboscariol.com/work">/work</Link>
                    <Link className="nav-link" to="https://andreasboscariol.com/">/contact</Link>
                </nav>
            </div>
        )
    }
}

export default Navigation