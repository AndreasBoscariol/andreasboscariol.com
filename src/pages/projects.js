import React from "react"
import Footer from "../components/footer"
import Header from "../components/navigation"
import RevealAnimation from "../components/reveal-animation"
import "../styles/main.css"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
          <div className="center-content">
            <div>
              <h1>🚧 Under Construction 🚧</h1>
              <p>Come back soon.</p>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export const Head = () => <title>Home</title>

export default IndexPage
