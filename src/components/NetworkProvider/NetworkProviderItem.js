import React from "react"
import NetworkProviderSVG from "@src/images/network-provider.svg"
import { Row, Col } from "react-bootstrap"
import "./NetworkProviderItem.scss"
const networkProviderItem = [
	{
		title: "UI/UX",
		image: <NetworkProviderSVG />,
		description: 'UI/UX for all Clients/ Influencers/ Users ',
		styleIcon: {
			width: "60px",
			backgroundColor: '#7ADA90',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
	{
		title: "Plats Network",
		image: <NetworkProviderSVG />,
		description: 'SDK Library, GPS register, NFT Mint & Tokens rewards by No-code Smart Contract',
		styleIcon: {
			width: "60px",
			backgroundColor: '#F8DA88',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
	{
		title: "NFT Marketplace",
		image: <NetworkProviderSVG />,
		description: 'Where each User can create their own marketplace to sell/buy NFT',
		styleIcon: {
			width: "60px",
			backgroundColor: '#62B9D8',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
	{
		title: "NFT HOME",
		image: <NetworkProviderSVG />,
		description: 'A private showroom for User to exhibit their NFT Collections, Vouchers, etc',
		styleIcon: {
			width: "60px",
			backgroundColor: '#A47ADA',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
	{
		title: "Plats Social",
		image: <NetworkProviderSVG />,
		description: 'Where Users can livestream their journey of doing Task or share their experiences, reviews, rating, achievements',
		styleIcon: {
			width: "60px",
			backgroundColor: '#DA7AAE',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
	{
		title: "Plats Events",
		image: <NetworkProviderSVG />,
		description: 'Rooms for Clients or Influencers to host a virtual event such as party, music event, exhibition, competition, etc.',
		styleIcon: {
			width: "60px",
			backgroundColor: '#A4DA7A',
			height: '60px',
			borderRadius: '50%',
			padding: '10px',
			marginBottom: "2rem",
		},
	},
]
const NetworkProviderItem = () => {
	return (
		<Row className="network-provider__container">
      {networkProviderItem.map(({ icon, image, title, description, styleIcon }, index) => (
        <Col md={4} sm={6} key={index} data-aos="zoom-in-down" className="network-provider__item">
          <div className="" style={styleIcon}>
            {image}
          </div>
          <h3 className="network-provider__box-title">{title}</h3>
          <p className="network-provider__box-description">{description}</p>
        </Col>
      ))}
    </Row>
	)
}
export default NetworkProviderItem