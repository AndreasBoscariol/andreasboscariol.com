import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/navigation"
import "../styles/main.css"

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div id="ErrorPage">
                          <h1>404 Error</h1>
                          <p>Oops, looks like something went wrong. There are a few reasons that could explain why you're seeing this.</p>
                          <ul>
                              <li>The page doesn't exist.</li>
                              <li>The wrong URL was entered.</li>
                              <li>A butterfly in Brazil flapped its wings, causing a chain reaction that resulted in the page not being found.</li>
                          </ul>
                          <Link to="/">Go to home page.</Link>
                    </div>
                  </div>
              </div>
              <Footer />
          </div>
        )
    }
}
export const Head = () => <title>404 :(</title>

export default ErrorPage