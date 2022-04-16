import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import GameChangerSVG from "@src/images/game-changer.svg"
import TrustInfoCollectSVG from "@src/images/trust-info-collect.svg"
import CreatorClientSVG from "@src/images/creator-client.svg"

import "./WhyPlats.scss"

const reasons = [
  {
    icon: <GameChangerSVG />,
    styleIcon: {
      backgroundColor: "#7ADA90",
    },
    title: "Game Changer",
    description:
      "Changing the World of Traditional Networking to Onchain Interactive Advertising",
  },
  {
    icon: <TrustInfoCollectSVG />,
    styleIcon: {
      backgroundColor: "#E8C564",
    },
    title: "Reliable Data Collected",
    description:
      "Time transparency, Interactive networking Onchain",
  },
  {
    icon: <CreatorClientSVG />,
    styleIcon: {
      backgroundColor: "#7CCAE6",
    },
    title: "Creators / Clients / Providers /Users ",
    description:
      "The interaction among and between Creators/ Clients/ Providers/ Users is all automated on Onchain with Smart contract",
  },
]

const WhyPlats = () => {
  return (
    <main className="why-plats">
      <h1 className="mb-5" data-aos="fade-down">
        Why Plats
      </h1>
      <Row
        xs={1}
        sm={2}
        md={4}
        lg={6}
        className="justify-content-lg-around justify-content-md-between justify-content-sm-center justify-content-xs-center"
        data-aos="fade-down"
      >
        {reasons.map(({ icon, styleIcon, title, description }, index) => (
          <Col key={index}>
            <h3 className="why-plats__title">{title}</h3>
            <div className="circle" style={styleIcon}>
              {icon}
            </div>
            <p className="why-plats__description">{description}</p>
          </Col>
        ))}
      </Row>
    </main>
  )
}

export default WhyPlats
