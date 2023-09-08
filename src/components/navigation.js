import React from "react"
import { Link } from "gatsby"

class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="main-navbar">
                    <Link className="nav-link" to="/">/home</Link>
                    <Link className="nav-link" to="/projects">/projects ⚠️</Link>
                    <Link className="nav-link" to="/work">/work ⚠️</Link>
                    <Link className="nav-link" to="/contact">/contact</Link>
                </nav>
            </div>
        )
    }
}

export default Navigation