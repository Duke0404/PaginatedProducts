export default function Search({
	query,
	setQuery
}: {
	query: number | ""
	setQuery: (query: number | "") => void
}) {
	function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		const input = event.target.value

		if (RegExp(/^\d+$/s).test(input)) setQuery(+event.target.value)
		else if (input === "") setQuery("")
	}

	return (
		<input
			placeholder="Search"
			onChange={handleSearch}
			value={query}
		/>
	)
}
