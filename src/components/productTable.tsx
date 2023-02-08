import { productType } from "src/app"
import { errorType } from "src/app"
import ProductRow from "./productRow"

const ProductTable = ({
	productList,
	filteredProduct,
	fetchError
}: {
	productList: productType[]
	filteredProduct: productType | undefined
	fetchError: errorType | undefined
}) => (
	<div className="flex flex-col w-full gap-2">
		{fetchError && (
			<div className="flex p-4 bg-red-300 text-red-800 rounded-xl">
				{fetchError === errorType.notFound
					? "The filter query does not match any product ID"
					: fetchError === errorType.serverDown
					? "The server is currently unavailable"
					: fetchError === errorType["5xx"]
					? "Server Error"
					: fetchError === errorType["4xx"]
					? "Client Error"
					: "Unknown Error"}
			</div>
		)}

		<div className="flex px-4 font-semibold dark:text-white">
			<span className="flex p-2">ID</span>
			<span className="flex p-2 grow">Name</span>
			<span className="flex p-2">Year</span>
		</div>
		{filteredProduct === undefined ? (
			productList.map((product: productType) => (
				<ProductRow
					product={product}
					key={product.id}
				/>
			))
		) : (
			<ProductRow product={filteredProduct} />
		)}
	</div>
)

export default ProductTable
