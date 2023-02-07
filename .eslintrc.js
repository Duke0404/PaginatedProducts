module.exports = {
	env: {
		browser: true,
		node: true,
		es2022: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@nrwl/nx/react"
	],

	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "@nrwl/nx"],
	rules: {
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": "off"
	}
}
