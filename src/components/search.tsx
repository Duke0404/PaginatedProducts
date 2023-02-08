import { MdFilterAlt, MdClear } from "react-icons/md"

export default function Search({
	query,
	setQuery,
	filterProducts,
	removeFilter,
	filterApplied
}: {
	query: number | ""
	setQuery: (query: number | "") => void
	filterProducts: () => void
	removeFilter: () => void
	filterApplied: boolean
}) {
	function handleText(event: React.ChangeEvent<HTMLInputElement>) {
		const input = event.target.value

		if (RegExp(/^\d+$/s).test(input)) setQuery(+input)
		else if (input === "") setQuery(input)
	}

	return (
		<div className="flex flex-row gap-2 w-full md:w-1/2">
			<input
				className="grow px-2 py-1 border-2 border-gray-300 rounded-xl dark:bg-slate-800 dark:text-white"
				placeholder="Filter with Product ID"
				onChange={handleText}
				value={query}
			/>
			<button
				className="flex p-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-teal-600 hover:bg-teal-500 active:bg-teal-400"
				onClick={filterProducts}
			>
				<MdFilterAlt />
			</button>
			{filterApplied && (
				<button
					className="flex p-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-rose-600 hover:bg-rose-500 active:bg-rose-400"
					onClick={removeFilter}
				>
					<MdClear />
				</button>
			)}
		</div>
	)
}
