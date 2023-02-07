import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"

import App from "./app"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<StrictMode>
		<BrowserRouter>
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<App />
			</QueryParamProvider>
		</BrowserRouter>
	</StrictMode>
)
