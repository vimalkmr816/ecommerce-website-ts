import axios from "axios"

export const getSingleProduct = async (id: number) => {
	try {
		const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
		return res?.data
	} catch (error) {
		return error
	}
}

export const getAllProducts = async () => {
	try {
		const res = await axios.get("https://fakestoreapi.com/products")
		return res?.data
	} catch (error) {
		return error
	}
}
