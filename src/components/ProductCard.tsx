import { Link } from "react-router-dom"
import { ProductsInterface } from "../common/interfaces"

interface Props {
	product: ProductsInterface
}
const ProductCard = ({ product }: Props) => {
	return (
		<Link to={`/product/${product.id}`} className="my-2 mx-2 flex flex-col gap-1 border w-1/4 max-w-sm rounded-lg p-3 shadow-xs hover:scale-105 hover:transition-transform hover:ease-in-out">
			<img src={product.image} className="aspect-square rounded-sm" />
			<div>
				<h2 className="font-bold">{product.title}</h2>
			</div>
			<span>{product.category}</span>
			<span>{`PRICE: ${product.price}`}</span>
			<span>Reviews:{product.rating.count}</span>
			<span>RATE: {product.rating.rate}</span>
		</Link>
	)
}

export default ProductCard
