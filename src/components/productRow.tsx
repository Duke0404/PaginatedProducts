import { useState } from "react"
import { productType } from "src/app"
import ProductDetail from "./productDetail"

/* I have to do this because using string concatenation to create dynamic classes is bad practice in Tailwind */
export enum bgColorType {
	"#98B2D1" = "bg-[#98B2D1]",
	"#C74375" = "bg-[#C74375]",
	"#BF1932" = "bg-[#BF1932]",
	"#7BC4C4" = "bg-[#7BC4C4]",
	"#E2583E" = "bg-[#E2583E]",
	"#53B0AE" = "bg-[#53B0AE]",
	"#DECDBE" = "bg-[#DECDBE]",
	"#9B1B30" = "bg-[#9B1B30]",
	"#5A5B9F" = "bg-[#5A5B9F]",
	"#F0C05A" = "bg-[#F0C05A]",
	"#45B5AA" = "bg-[#45B5AA]",
	"#D94F70" = "bg-[#D94F70]"
}

export default function ProductRow({ product }: { product: productType }) {
	const [showDetail, setShowDetail] = useState(false)

	function closeDetail() {
		setShowDetail(false)
	}

	return (
		<>
			{showDetail && (
				<ProductDetail
					product={product}
					closeDetail={closeDetail}
				/>
			)}

			<div
				onClick={() => setShowDetail(true)}
				className={
					"flex flex-row p-4 shadow-md hover:shadow-none cursor-pointer rounded-xl " +
					bgColorType[product.color]
				}
			>
				<span className="flex p-2">{product.id + "."}</span>
				<span className="flex p-2 grow">
					{product.name.charAt(0).toUpperCase() + product.name.slice(1)}
				</span>
				<span className="flex p-2">{product.year}</span>
			</div>
		</>
	)
}
