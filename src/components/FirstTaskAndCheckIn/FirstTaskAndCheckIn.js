import React from "react"
import "./FirstTaskAndCheckIn.scss"
import FirstTaskAndCheckInBox from "./FirstTaskAndCheckInBox"
const FirstTaskAndCheckIn = () => {
  return (
		<main id="first-task-and-check-in" className="first-task-and-check-in">
			<h1 className="first-task-and-check-in__title" data-aos="fade-down">
				First task and check in
			</h1>
			<FirstTaskAndCheckInBox />
		</main>
	)
}
export default FirstTaskAndCheckIn