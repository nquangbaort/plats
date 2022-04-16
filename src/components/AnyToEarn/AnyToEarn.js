import React from "react"

import EarnItem from "./EarnItem"
import EarnBox from "./EarnBox"

import "./AnyToEarn.scss"

const AnyToEarn = () => {
  return (
    <main id="features" className="any-to-earn">
      <h1 className="any-to-earn__title" data-aos="fade-down">Features</h1>
      <EarnItem />
      <EarnBox />
    </main>
  )
}

export default AnyToEarn
