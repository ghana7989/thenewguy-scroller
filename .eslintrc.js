module.exports = {
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['jest', 'react', '@typescript-eslint'],
	rules: {
		quotes: ['error', 'single'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'no-throw-literal': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
