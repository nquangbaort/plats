import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useDevice from "../../hooks/useDevice"
import "./Banner.scss"

const Banner = ({ image }) => {
  const { isMobile, isTablet } = useDevice()

  return (
    <main id="overview" className="banner">
      {!isMobile && !isTablet && (
        <div
          className="banner__grouptext"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <h1
            className="banner__grouptext__title"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            PLATS NETWORK
          </h1>
          <p
            className="banner__grouptext__sub"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            We Connect, You Earn!
          </p>
        </div>
      )}

      <GatsbyImage image={image} alt="banner" />
    </main>
  )
}

export default Banner
