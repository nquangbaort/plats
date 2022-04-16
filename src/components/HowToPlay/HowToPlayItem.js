import React from "react"
import "./HowToPlayItem.scss"
const howToPlay = [
	{
		title: "Client",
		description: "Use the Tools available on Platform to create a Task and set reward for winning Users and then push that new Task to Task Pool.",
		styleBox: {
			width: "160px",
			height: "160px",
			borderRadius:  "20px",
			backgroundColor: "#9AD9AC",
			marginBottom: "2rem"
		}
	},
	{
		title: "Influencers",
		description: "Log in to Task Pool, pick the favorite Task and click “Generate” to get the link and share this link to their community. The more Users access to do the Task by that link, the more  rewards Influencer will receive.",
		styleBox: {
			width: "160px",
			height: "160px",
			borderRadius:  "20px",
			backgroundColor: "#9AD9AC",
			marginBottom: "2rem"
		}
	},
	{
		title: "User",
		description: "Choose their favorite Task and let’s go. Complete the Task and get the rewards. The higher the User rank, the more User is unlocked to participate in Special Tasks with higher rewards.",
		styleBox: {
			width: "160px",
			height: "160px",
			borderRadius: "20px",
			backgroundColor: "#9AD9AC",
			marginBottom: "2rem"
		}
	},
]


const HowToPlayItem = () => {
	return (
		<>
			{howToPlay.map(({ title, description, styleBox }, index) => (
				<div key={index}  className="how-to-play__item">
				<div  style={styleBox}></div>
				<div className="how-to-play__item__container">
					<h3 className="how-to-play__item__title">{title}</h3>
					<p className="how-to-play__item__description">{description}</p>
				</div>
			</div>
			))}
		</>
	)
}
export default HowToPlayItem