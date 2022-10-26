import axios from "axios"
import { Route, Routes } from "react-router-dom"
import { FooterData, NavbarData } from "./common/constants"
import { ProductContextProvider } from "./common/contexts/productContext"
import ErrorPage from "./components/ErrorUI"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Feed from "./pages/Feed"
import Home from "./pages/Home"
import Product from "./pages/Product"
function App() {
	return (
		<>
			<Navbar links={NavbarData} />
			<ProductContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</ProductContextProvider>
			<Footer data={FooterData} />
		</>
	)
}

export default App
