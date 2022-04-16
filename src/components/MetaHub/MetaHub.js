import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./MetaHub.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const MetaHub = ({ image }) => {
  return (
    <main id="metahub" className="meta-hub">
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        className="justify-content-lg-around justify-content-md-around justify-content-sm-between align-items-center"
      >
        <Col
          className="meta-hub__image"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <GatsbyImage image={image} alt="Metahub image" />
        </Col>
        <Col data-aos="fade-up" data-aos-easing="ease-in-sine">
          <h1 className="meta-hub__title mb-3 d-none d-sm-block">What’s Plats Network</h1>
          <h4 className="meta-hub__description">
            Plats Network is a Move2Earn Platform that
          </h4>
          <h4 className="meta-hub__description">
            changes your lifestyle and your business
          </h4>
        </Col>
      </Row>
    </main>
  )
}

export default MetaHub
