import { productType } from "src/app"

export default function ProductTable({ productList, query }: { productList: any, query: number | "" }) {
	return <ul>
		{query ? <li>{productList.name}</li> : (
			console.log(productList),
			
			productList.map((product) => (
			<li key={product.id}>{product.name}</li>
		)))}
	</ul>
}
