import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from "react-icons/md"

export default function PageControls({
	page,
	setPage,
	lastPage
}: {
	page: number
	setPage: (page: number) => void
	lastPage: number
}) {
	const next = () => page !== lastPage && setPage(page + 1)
	const previous = () => page !== 1 && setPage(page - 1)
	const first = () => setPage(1)
	const last = () => setPage(lastPage)

	return (
		<div className="fixed bottom-10 flex flex-row gap-2 bg-white dark:bg-slate-900 p-4 rounded-xl">
			<button
				onClick={first}
				className="flex px-4 py-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-teal-600 hover:bg-teal-500 active:bg-teal-400"
			>
				<MdFirstPage />
			</button>
			<button
				onClick={previous}
				className="flex px-4 py-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-teal-600 hover:bg-teal-500 active:bg-teal-400"
			>
				<MdNavigateBefore />
			</button>
			<span className="flex px-4 py-3 justify-center items-center dark:text-white">
				{page}
			</span>
			<button
				onClick={next}
				className="flex px-4 py-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-teal-600 hover:bg-teal-500 active:bg-teal-400"
			>
				<MdNavigateNext />
			</button>
			<button
				onClick={last}
				className="flex px-4 py-3 justify-center items-center rounded-xl shadow-md hover:shadow-none bg-teal-600 hover:bg-teal-500 active:bg-teal-400"
			>
				<MdLastPage />
			</button>
		</div>
	)
}
