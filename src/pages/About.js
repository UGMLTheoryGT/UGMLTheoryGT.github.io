import React from "react"
import { Link, graphql } from "gatsby"

import "katex/dist/katex.min.css"
import Nav from "../components/nav"

const AboutPage = () => {
  return (
    <div>
        <h1>Welcome!</h1>
        <p>We are a group of undergrads working under Jacob Abernethy exploring Machine Learning Theory.  
            Our blog mostly has digest posts of what we're reading!
        </p>
    </div>
  )
}

export default AboutPage