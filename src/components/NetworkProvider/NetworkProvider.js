import React from "react"
import "./NetworkProvider.scss"
import NetworkProviderBox from "./NetworkProviderBox"

const NetworkProvider = () => {
	return (
		<main id="network-provider" className="network-provider">
			<h1 className="network-provider__title" data-aos="fade-down">
				Plats Network provides
			</h1>
			<NetworkProviderBox />
		</main>
	)
}
export default NetworkProvider