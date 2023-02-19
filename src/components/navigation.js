import React from "react"
import { Link } from "gatsby"

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="main-navbar">
                    <a className="nav-link" href="https://andreasboscariol.com/">/home</a>
                    <a className="nav-link" href="https://andreasboscariol.com/about">/about</a>
                    <a className="nav-link" href="https://andreasboscariol.com/projects">/projects</a>
                    <a className="nav-link" href="https://andreasboscariol.com/work">/work</a>
                    <a className="nav-link" href="https://andreasboscariol.com/">/contact</a>
                </nav>
            </div>
        )
    }
}

export default Navigation
