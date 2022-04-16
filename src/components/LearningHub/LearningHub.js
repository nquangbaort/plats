import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./LearningHub.scss"

const LearningHub = ({ images }) => {
  const lessons = [
    {
      avatar: images[0],
      name: "Lesson 1 - Near Concept",
    },
    {
      avatar: images[1],
      name: "Lesson 2 - Near Concept",
    },
    {
      avatar: images[2],
      name: "Lesson 3 - Near Concept",
    },
  ]

  return (
    <main className="learning-hub">
      <h1 className="learning-hub__title mb-5" data-aos="fade-down">Learning Hub</h1>
      <Row xs={1} sm={2} md={3} lg={3} className="justify-content-center">
        {lessons.map(({ avatar, name }, index) => (
          <Col key={index} className="learning-hub__box" data-aos="zoom-in-down">
            <GatsbyImage image={avatar} className="mb-2" style={{ width: '342px', height: '305px' }} alt="Learning hub image"  />
            <p className="learning-hub__name">{name}</p>
          </Col>
        ))}
      </Row>
    </main>
  )
}

export default LearningHub
