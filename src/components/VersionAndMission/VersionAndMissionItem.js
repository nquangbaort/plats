import React from "react"
import { Row, Col } from "react-bootstrap"
import "./VersionAndMissionItem.scss"
const missionAndVersion = [
	{
		title : "Plats’ mission",
		description : "Plats aims to build a Platform (1) to activate potential technology-oriented individuals towards a HEALTHY and balanced lifestyle and (2) to conduct the comprehensive Digital Transformation, especially for Traditional Businesses with maximum support of Web3 technologies.",
		styleBox : {
			backgroundColor : "#E0EEF8",
			height: "200px",
			borderRadius: "30px",
			margin: "0 auto 2rem auto",
		}
	},
	{
		title : "Plats’ mission",
		description : "Plats aims to build a Platform (1) to activate potential technology-oriented individuals towards a HEALTHY and balanced lifestyle and (2) to conduct the comprehensive Digital Transformation, especially for Traditional Businesses with maximum support of Web3 technologies.",
		styleBox : {
			backgroundColor : "#E0EEF8",
			margin: "0 auto 2rem auto",
			height: "200px",
			borderRadius: "30px",
		}
	},
]

const VersionAndMissionItem = () => {

	return (
		<Row className="version-and-mission__box">
			{missionAndVersion.map(({ styleBox, title, description }, index) => (
        <Col md={6} sm={12} key={index} data-aos="zoom-in-down">
          <div className="" style={styleBox}>
          </div>
          <h3 className="version-and-mission_box__title">{title}</h3>
          <p className="version-and-mission_box__description">{description}</p>
        </Col>
      ))}
		</Row>
	)
}
export default VersionAndMissionItem