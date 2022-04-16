import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row, Stack } from "react-bootstrap"

import IconHandSVG from "../../images/icon-hand.svg"
import "./GameHub.scss"

const GameHub = () => {
  return (
    <main className="game-hub" style={{ textAlign: "center" }}>
      <Stack className="justify-content-center game-hub__title" direction="horizontal" gap={4}>
        <IconHandSVG className="icon__hand" />
        <a target="_blank" href="https://demo.plats.network/" rel="noopener">
          <h1 data-aos="fade-right">
            Game hub
          </h1>
        </a>
      </Stack>
    
      <Row lg={3} className="justify-content-center">
        <Col data-aos="fade-up-right">
          <StaticImage src="../../images/game-card.png" alt="Game Card" />
        </Col>
        <Col>
          <Row className="align-content-between" style={{ height: "100%" }}>
            <Row
              lg={3}
              className="justify-content-center align-items-center"
              data-aos="fade-up-left"
            >
              <Col>
                <StaticImage src="../../images/game-1.png" alt="The Crew" />
              </Col>
              <Col>
                <StaticImage
                  src="../../images/game-2.png"
                  alt="Counter Strike"
                />
              </Col>
            </Row>
            <Row
              lg={3}
              className="justify-content-center align-items-center"
              data-aos="fade-left"
            >
              <Col>
                <StaticImage src="../../images/game-3.png" alt="Hash bush" />
              </Col>
              <Col>
                <StaticImage src="../../images/game-4.png" alt="f1 2020" />
              </Col>
            </Row>
            <Row
              lg={3}
              className="justify-content-center align-items-center"
              data-aos="fade-down-left"
            >
              <Col>
                <StaticImage src="../../images/game-5.png" alt="Destiny 2" />
              </Col>
              <Col>
                <StaticImage
                  src="../../images/game-6.png"
                  alt="Axie infinity"
                />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </main>
  )
}

export default GameHub
