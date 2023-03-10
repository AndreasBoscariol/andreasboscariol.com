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
                    <h1 className="main-reveal-text-short">Hi, I'm Andreas.<br />I do mechanical engineering.</h1>
                    <div className="main-fade-in-animation">
                      <p>I'm a 19 year old security researcher studying Mechanical Engineering at the University of .</p>
                    </div>
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