import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "./MetaVerse.scss"
const MetaVerse = ({ image }) => {
  return (
		<div className="meta-verse">
			<StaticImage
      src="../../images/meta-verse.png"
      alt="meta verse"
      placeholder="meta verse"
      layout="fixed"
    />
		<div className="meta-verse__content">
			<h2>Metaverse</h2>
			<p>
			Preview Mode:  preview the Task on Metaverse before going out to actually do it
			Metaverse NFT HOME for Users
			Metaverse SHOPHOUSE for Clients
			Metaverse EVENT: parties, auctions, music events, etc.

			</p>
		</div>
		</div>
		
	)
}
export default MetaVerse