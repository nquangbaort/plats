import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./Backer.scss"
import { StaticImage } from "gatsby-plugin-image"

const backer = [
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
  {
    icon: <StaticImage src="../../images/backer-nexo.png" alt="Nexo" />,
  },
]

const Backer = () => {
  return (
    <main className="backer">
      <h1 className="backer__title" data-aos="fade-right">Backed By</h1>
      <Row xs={2} sm={3} md={4} lg={6} className="justify-content-center">
        {backer.map(({ icon }, index) => (
          <Col key={index} data-aos="fade-right">
            <div className="backer__box">
              {icon}
            </div>
          </Col>
        ))}
      </Row>
    </main>
  )
}

export default Backer
