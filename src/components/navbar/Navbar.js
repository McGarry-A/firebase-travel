import React, { useState } from "react"
import { BsBookmarkHeart } from "react-icons/bs"
import { FaRegUser } from "react-icons/fa"
import { HiOutlineX } from "react-icons/hi"
import Logo from "../logo/Logo"

const Navbar = () => {
	const [isExpanded, setIsExpanded] = useState( false )

	const toggleExpand = () => {
		setIsExpanded( !isExpanded )
	}

	const NavItem = ( { link, children } ) => (
		<a href={link}>
			<li className="tracking-wider text-center list-style-none text-lg mx-auto lg:mr-4 mt-4 lg:inline-block lg:mt-0 lg:text-sm text-white cursor-pointer lg:my-auto hover:scale-110 transition uppercase">
				{children}
			</li>
		</a>
	)

	const Nav = ( { isExpanded, children } ) => (
		<nav
			className={`text-sm lg:flex-grow lg:block ${
				isExpanded && "flex flex-col align-middle justify-center align-center"
			}`}
		>
			{children}
		</nav>
	)

	const renderMenuButton = () => (
		<div className="block lg:hidden">
			<button
				onClick={toggleExpand}
				className="flex items-center px-3 py-2 border rounded text-white border-white border-dotted hover:border-solid"
			>
				{isExpanded ? (
					<HiOutlineX
						size="1rem"
						color="white"
						onClick={toggleExpand}
						className="hover:scale-125 transition"
					/>
				) : (
					<svg
						className="fill-current h-4 w-4 hover:scale-125 transition"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				)}
			</button>
		</div>
	)

	const renderIcons = () => (
		<div className="flex lg:order-3">
			<button className="mx-2">
				<BsBookmarkHeart
					size="1.5rem"
					color="white"
					className="hover:scale-125 transition"
				/>
			</button>
			<button className="mr-2">
				<FaRegUser
					size="1.5rem"
					color="white"
					className="hover:scale-125 transition"
				/>
			</button>
		</div>
	)

	const renderNav = () => (
		<div
			className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-10 lg:text-xl transition-all ${
				isExpanded ? "h-auto" : "h-0"
			}`}
		>
			<Nav isExpanded>
				<ul className={"lg:pt-0 transition mt-5 lg:mt-0 divid"}>
					<NavItem link="">Home</NavItem>
					<NavItem link="">Recipies</NavItem>
					<NavItem link="">About</NavItem>
					<NavItem link="">Logout</NavItem>
				</ul>
			</Nav>
		</div>
	)

	return (
		<header className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
			{renderMenuButton()}
			<Logo />
			{renderIcons()}
			{renderNav()}
		</header>
	)
}

export default Navbar
