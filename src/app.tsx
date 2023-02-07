import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Search from "./components/search"
import ProductTable from "./components/productTable"

export interface productType {
	id: number
	name: string
	year: number
	color: string
	pantone_value: string
}

export default function App() {
	const [query, setQuery] = useState<number | "">("")
	const [page, setPage] = useState(1)
	const [productList, setProductList] = useState<any>([])

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://reqres.in/api/unknown?per_page=5&page=${page}&${
					query !== "" ? `id=${query}` : ""
				}`
			)
			const data = await response.json()
			setProductList(data.data)
		})()
	}, [query, page])

	return (
		<>
			<Search
				query={query}
				setQuery={setQuery}
			/>
			<Routes>
				<Route
					index
					element={
						<ProductTable
							query={query}
							productList={productList}
						/>
					}
				/>
			</Routes>
		</>
	)
}
