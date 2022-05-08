import React from "react"

import { SiFoodpanda } from "react-icons/si"

import LogoContainer from "./Wrappers/LogoContainer"

const Logo = () => {
	return (
		<LogoContainer>
			<SiFoodpanda size="2em" color="white" className="mr-1" />
			<span className="font-semibold text-xl tracking-tight">RecipiPanda</span>
		</LogoContainer>
	)
}

export default Logo
