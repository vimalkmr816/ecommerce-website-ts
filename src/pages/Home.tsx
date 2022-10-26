import { useContext, useEffect } from "react"
import { useAsync } from "react-async-hook"
import { getAllProducts } from "../common/api"
import { ProductContext } from "../common/contexts/productContext"
import { ProductsInterface } from "../common/interfaces"
import ProductCard from "./../components/ProductCard"

const Home = () => {
	const { products, setProducts } = useContext(ProductContext)
	const { loading, error, result } = useAsync(getAllProducts, [])

	useEffect(() => {
		setProducts(result)
	}, [result])
	if (loading) return <h2>Loading....</h2>
	if (error) return <h2>Please try again</h2>

	const shuffledArr = result.sort(() => Math.random() - 0.5)
	return (
		<>
			<div className="flex flex-wrap justify-center">
				{shuffledArr?.map((product: ProductsInterface) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</>
	)
}

export default Home
