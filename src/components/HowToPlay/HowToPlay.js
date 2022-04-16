import React from "react"
import "./HowToPlay.scss"
import HowToPlayBox from "./HowToPlayBox"
const HowToPlay = () => {
	return (
		<main id="how-to-play" className="how-to-play">
			<h2 className="how-to-play__title" data-aos="fade-down">
				How to play
			</h2>
			<HowToPlayBox />
		</main>
	)
}
export default HowToPlay