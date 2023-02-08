import { productType } from "src/app"
import { bgColorType } from "./productRow"

const ProductDetail = ({
	product,
	closeDetail
}: {
	product: productType
	closeDetail: () => void
}) => (
	<div className="bg-black/90 fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10">
		<div className="w-80 p-4 rounded-xl flex flex-col bg-white dark:dark:bg-slate-800 dark:text-white">
			<div className={"h-72 rounded-xl " + bgColorType[product.color]} />
			<h2 className="text-2xl font-semibold">
				{product.name.charAt(0).toUpperCase() + product.name.slice(1)}
			</h2>
			<span>
				<span className="font-semibold dark:text-slate-300">ID: </span>
				{product.id}
			</span>
			<span>
				<span className="font-semibold dark:text-slate-300">Year: </span>
				{product.year}
			</span>
			<span>
				<span className="font-semibold dark:text-slate-300">Color: </span>
				{product.color}
			</span>
			<span>
				<span className="font-semibold dark:text-slate-300">Pantone: </span>
				{product.pantone_value}
			</span>
			<button
				className="flex p-3 mt-2 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-rose-600 hover:bg-rose-500 active:bg-rose-400"
				onClick={closeDetail}
			>
				Close
			</button>
		</div>
	</div>
)

export default ProductDetail
