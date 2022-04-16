import React from "react"
import "./FirstTaskAndCheckInBox.scss"
import { Row, Col } from "react-bootstrap"
const FirstTaskAndCheckInBox = () => {
  return (
		<Row className="first-task-and-check-in-box">
			<Col xs={12} md={4} sm={12}>
				<div className="first-task-and-check-in-box__item">
				</div>
			</Col>
			<Col xs={12} md={4} sm={12}>
				<div className="first-task-and-check-in-box__item">
				</div>
			</Col>
			<Col xs={12} md={4} sm={12}>
				<div className="first-task-and-check-in-box__item">
				</div>
			</Col>
		</Row>
	)
}
export default FirstTaskAndCheckInBox