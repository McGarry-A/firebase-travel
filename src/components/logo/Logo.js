import React from "react"
import { SiFoodpanda } from "react-icons/si"

const Logo = () => {
	const LogoContainer = ( { children } ) => (
		<div className="flex items-center justify-center text-white">
			{children}
		</div>
	)

	return (
		<LogoContainer>
			<SiFoodpanda size="2em" color="white" className="mr-1" />
			<span className="font-semibold text-xl tracking-tight">RecipiPanda</span>
		</LogoContainer>
	)
}

export default Logo
