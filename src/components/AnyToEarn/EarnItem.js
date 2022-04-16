import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import PlayToEarnSVG from "@src/images/play-to-earn.svg"
import LearnToEarnSVG from "@src/images/learn-to-earn.svg"
import RealActionSVG from "@src/images/real-action.svg"


import "./EarnItem.scss"

const earnItems = [
  {
    icon: <PlayToEarnSVG />,
    styleIcon: {
      backgroundColor: "#7ADA90",
    },
    title: "Play To Earn",
    description:
      "Users will play game and then interact and give service feedbacks for Clients. The more users play, interact and feedback, the more they can earn Plats, brand’s NFT & FT.",
  },
  {
    icon: <LearnToEarnSVG />,
    styleIcon: {
      backgroundColor: "#F8DA88",
    },
    title: "Learn to earn",
    description:
      "Users will learn about a brand, a product or any concept which Client targets Users to know about. After learning, Users give feedbacks for Clients. The more users play, the more token/NFT/FT they can earn.",
  },
  {
    icon: <RealActionSVG />,
    styleIcon: {
      backgroundColor: "#7CCAE6",
    },
    title: "Real action",
    description:
      "Real action is the focus, aiming at guiding Users to take a real-life action to complete a task and earn token. Easy earn, healthy life.",
  },
]

const EarnItem = () => {
  return (
    <Row xs={1} sm={2} md={3} lg={6} className="earn-item mx-auto my-0 justify-content-around align-items-center">
      {earnItems.map(({ icon, styleIcon, title, description }, index) => (
        <Col key={index} data-aos="zoom-in-down">
          <div className="circle" style={styleIcon}>
            {icon}
          </div>
          <h3 className="earn-item__title">{title}</h3>
          <p className="earn-item__description">{description}</p>
        </Col>
      ))}
    </Row>
  )
}

export default EarnItem
