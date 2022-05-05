module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "react-app"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		"object-curly-spacing": [1, "always"],
		"space-in-parens": [1, "always"],
		semi: ["error", "never"],
		"arrow-parens": [2, "as-needed"],
		"react/prop-types": 0,
	},
}
