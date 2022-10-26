import { Skeleton } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useRef, useState } from "react"
import { useAsync } from "react-async-hook"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../common/api"
import { ProductContext } from "../common/contexts/productContext"
import { ProductsInterface } from "../common/interfaces"
import CartInputButton from "../components/CartInputButton"
import ProductCard from "../components/ProductCard"
import { incrementCart } from "../redux/slices/cartSlice"

const Product = () => {
	const { products } = useContext(ProductContext)
	const [value, setValue] = useState<number>(1)
	const dispatch = useDispatch()
	const cartQuantity = useSelector(state => state)
	const { id } = useParams()
	let prodId: number = 0
	if (id) {
		prodId = parseInt(id)
	}
	const { loading, error, result } = useAsync(getSingleProduct, [prodId])

	const cartInputRef = useRef()
	if (loading)
		return (
			<>
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
			</>
		)
	if (error) {
		return <h2>Oops! Please try from correct Route</h2>
	}
	console.log(cartQuantity)
	const handleAddToCart = (val: number) => {
		dispatch(incrementCart({ id: prodId, quantity: val }))
	}
	const { title, price, description, category, image, rating } = result
	return (
		<div className="flex align-top justify-center">
			<img src={image} className="rounded-sm m-6" />
			<div className="p-20">
				<h2 className="font-bold">{title}</h2>
				<div className="flex flex-col">
					<span>{category}</span>
					<span>{`PRICE: ${price}`}</span>
					<span>Reviews:{rating.count}</span>
					<span>RATE: {rating.rate}</span>
				</div>
				<input type="number" className="border-2 rounded-md p-1.5 mr-2" placeholder="Quantity" onChange={e => setValue(parseInt(e.target.value))} />
				<button className="py-2 px-3 mr-3 my-2 border-2 rounded-lg bg-blue-600 text-white border-none" onClick={() => handleAddToCart(value)}>
					Add To Cart
				</button>
				<button className="py-2 px-3 mr-3 my-2 border-2 rounded-lg bg-orange-400 text-white border-none">Buy Now</button>
			</div>
		</div>
	)
}

export default Product
