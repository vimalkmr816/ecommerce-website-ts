import React from "react"
import { FooterData, NavbarData } from "../common/constants"
import ErrorUI from "../components/ErrorUI"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const _error = () => {
	return (
		<div>
			<Navbar links={NavbarData} />
			<ErrorUI />
			<Footer data={FooterData} />
		</div>
	)
}

export default _error
