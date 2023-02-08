import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Search from "./components/search"
import ProductTable from "./components/productTable"
import PageControls from "./components/pageControls"

export interface productType {
	id: number
	name: string
	year: number
	color: string
	pantone_value: string
}

export enum errorType {
	notFound = 404,
	"4xx" = "4xx",
	serverDown = 503,
	"5xx" = "5xx"
}

export default function App() {
	const [fetchError, setFetchError] = useState<errorType | undefined>()
	const [query, setQuery] = useState<number | "">("")
	const [page, setPage] = useState(1)
	const [lastPage, setLastPage] = useState(1)
	const [productList, setProductList] = useState<productType[]>([])
	const [filteredProduct, setFilteredProduct] = useState<productType>()

	const fetchURL = "https://reqres.in/api/products?per_page=5&"

	function setError(code: number) {
		if (code === 404) setFetchError(errorType.notFound)
		else if (code === 500) setFetchError(errorType.serverDown)
		else if (code >= 400 && code < 500) setFetchError(errorType["4xx"])
		else if (code >= 500 && code < 600) setFetchError(errorType["5xx"])
	}

	function filterProducts() {
		if (query === "") return

		setFetchError(undefined)
		;(async () => {
			const response = await fetch(fetchURL + "id=" + query)

			if (!response.ok) {
				setError(response.status)
				return
			}

			const data = await response.json()
			setFilteredProduct(data.data)
		})()
	}

	function removeFilter() {
		setFetchError(undefined)
		setFilteredProduct(undefined)
		setQuery("")
	}

	useEffect(() => {
		setFetchError(undefined)
		;(async () => {
			const response = await fetch(fetchURL + "page=" + page)

			if (!response.ok) {
				setError(response.status)
				return
			}

			const data = await response.json()
			setProductList(data.data)
			setLastPage(data.total_pages)
		})()
	}, [page])

	return (
		<>
			<nav className="flex flex-col items-center w-full gap-2 px-4 py-2 md:flex-row md:justify-between">
				<h1 className="text-3xl font-semibold dark:text-white">Products DB</h1>

				<Search
					query={query}
					setQuery={setQuery}
					filterProducts={filterProducts}
					removeFilter={removeFilter}
					filterApplied={filteredProduct !== undefined}
				/>
			</nav>
			<Routes>
				<Route
					index
					element={
						<ProductTable
							productList={productList}
							filteredProduct={filteredProduct}
							fetchError={fetchError}
						/>
					}
				/>
			</Routes>

			<PageControls
				page={page}
				setPage={setPage}
				lastPage={lastPage}
			/>
		</>
	)
}
