import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./TeamMember.scss"
import { StaticImage } from "gatsby-plugin-image"

const TeamMember = ({ avatar, name, role, description, linkedln }) => {
  return (
    <Row className="team-member justify-content-center align-items-start">
      <Col xs={4} sm={4} md={4} lg={4}>{avatar}</Col>
      <Col xs={{ span: 8 }} sm={{ span: 6 }} md={{ span: 7 }} lg={{ span: 6  }} >
        <Row className="align-items-center">
          <Col xs={9} lg={9}>
            <h4 className="team-member__name">{name}</h4>
          </Col>
          <Col>
            <a target="_blank" href={linkedln} style={{ cursor: "pointer" }} rel="noopener">
              <StaticImage
                src="../../images/linkedln.svg"
                alt="linkedln icon"
                color="#0077B5"
                alt="linked icon"
              />
            </a>
          </Col>
        </Row>
        

        <h5 style={{  clear: "both" }} className="team-member__role">{role}</h5>
        <p className="team-member__description">{description}</p>
      </Col>
    </Row>
  )
}

export default TeamMember
