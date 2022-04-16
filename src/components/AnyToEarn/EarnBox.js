import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import PlatsToEarnSVG from "@src/images/plats-to-earn.svg"
import MiddlewareConvertSVG from "@src/images/middleware-convert.svg"
import NFTMarketPlaceSVG from "@src/images/nft-marketplace.svg"
import GameHubSVG from "@src/images/game-hub.svg"
import BrandingSVG from "@src/images/branding.svg"
import NocodeSVG from "@src/images/nocode.svg"

import "./EarnBox.scss"

const boxes = [
  {
    icon: <PlatsToEarnSVG />,
    content: "Plats to Earn",
    style: {
      backgroundColor: "#7ADA90",
    },
  },
  {
    icon: <MiddlewareConvertSVG />,
    content: "Middleware to convert from Game to Games Hub fastest",
    style: {
      backgroundColor: "#F8DA88",
    },
  },
  {
    icon: <NFTMarketPlaceSVG />,
    content: "NFTs – NFT Market",
    style: {
      backgroundColor: "#7CCAE6",
    },
  },
  {
    icon: <GameHubSVG />,
    content: "Game Hub",
    style: {
      backgroundColor: "#91EAA5",
    },
  },
  {
    icon: <BrandingSVG />,
    content: "Branding",
    style: {
      backgroundColor: "#EECC6E",
    },
  },
  {
    icon: <NocodeSVG />,
    content: "No-code to Make NFTs and Embed Branding & NFTs",
    style: {
      backgroundColor: "#8BDBF8",
    },
  },
]

const EarnBox = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={3} className="earn-box justify-content-around align-items-center">
      {boxes.map(({ icon, content, style }, index) => (
        <Col key={index} style={style} data-aos="flip-right">
            <div className="earn-box__icon">{icon}</div>
            <p className="earn-box__content">{content}</p>
        </Col>
      ))}
    </Row>
  )
}

export default EarnBox
