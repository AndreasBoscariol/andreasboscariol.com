import React from "react"

import Footer from "../components/footer"
import Header from "../components/navigation"
import RevealAnimation from "../components/reveal-animation"
import "../styles/main.css"

class AboutPage extends React.Component {
  render(){
    return (
      <div className="main-page">
        <Header/>
         
         <Footer/>
      </div>
    )
  }
}

export const Head = () => <title>About Me</title>

export default AboutPage