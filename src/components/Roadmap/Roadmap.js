import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "./Roadmap.scss"

const Roadmap = ({ image }) => {
  return (
    <main id="roadmap" className="roadmap" data-aos="fade-right">
      <h1 className="roadmap__title">Y2022/23 launch Activities</h1>
      <GatsbyImage className="roadmap__image" image={image} alt="Road map" />
    </main>
  )
}

export default Roadmap
