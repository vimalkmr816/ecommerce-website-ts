import React, { createContext, useState } from "react"
import { ProductsInterface } from "../interfaces"
interface ProductContextProviderProps {
	children: React.ReactNode
}
type IProductContext = { products: ProductsInterface[] | undefined; setProducts: React.Dispatch<React.SetStateAction<ProductsInterface[] | undefined>> }

export const ProductContext = createContext<IProductContext>({ products: [], setProducts: () => null })

export const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
	const [products, setProducts] = useState<ProductsInterface[] | undefined>([])

	return <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
}
