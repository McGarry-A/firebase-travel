import React from "react"

import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import Logo from "../logo/Logo"
import FooterContainer from "./Wrappers/FooterContainer"

const Footer = () => {
	const renderSocialIcons = () => (
		<div className="flex justify-around">
			<FaFacebookF
				color="white"
				size="1.5rem"
				className="icon mx-2"
			/>
			<FaInstagram
				color="white"
				size="1.5rem"
				className="icon mx-2"
			/>
			<BsTwitter
				color="white"
				size="1.5rem"
				className="icon mx-2"
			/>
		</div>
	)

	return (
		<FooterContainer>
			<Logo />
			{renderSocialIcons()}
		</FooterContainer>
	)
}

export default Footer
