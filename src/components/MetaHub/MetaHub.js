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
          <h1 className="meta-hub__title mb-3 d-none d-sm-block">MetaHub</h1>
          <h4 className="meta-hub__description">
            Plats – a NEAR-based platform to create a playground to connect
            Clients, Creators, Referrers, and Users inside a Meta Hub – a
            scalable Hub including Game Hub, Learning Hub, Action Hub, Video Hub
            and Metaverse Hub, where all above stakeholders can benefit via
            networking in the platform.
          </h4>
        </Col>
      </Row>
    </main>
  )
}

export default MetaHub
