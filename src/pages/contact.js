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
            <div className="contact-section">
              <h2>Contact Me</h2>
              
              <h3>Get in Touch</h3>
              <p>
                Feel free to email me if you have any projects, ideas, or opportunities you'd like to chat about.
              </p>
              <p>
                📧 <a href="mailto:andreasboscariol@gmail.com">andreasboscariol@gmail.com</a>
              </p>
              <h3>Download My Resume</h3>
              <p>
                Interested in learning more about my background, skills, and experience? Please click the link below to download a copy of my resume.
              </p>
              <p>
                📄 <a href="/ab_resume.pdf">Download Resume</a>
              </p>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export const Head = () => <title>Contact</title>

export default IndexPage
