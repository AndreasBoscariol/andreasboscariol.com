import React from "react"

import Footer from "../components/footer"
import Header from "../components/navigation"
import RevealAnimation from "../components/reveal-animation"
import "../styles/main.css"

class IndexPage extends React.Component {
  render(){
    return (
      <div className="main-page">
        <Header/>
         <div className="container">
            <div className="row">
                <div>
                   
                </div>
              </div>
            </div>
         <Footer/>
      </div>
    )
  }
}

export const Head = () => <title>Home</title>

export default IndexPage