module.exports = {
	plugins: [
		require('postcss-preset-env')({
			stage: 0,
			autoprefixer: {
				grid: true,
			},
			preserve: false,
		}),
		require('postcss-import'),
		require('postcss-apply'),
		require('stylelint'),
		require('postcss-custom-media')({
			preserve: false,
		}),
		require('postcss-custom-selectors'),
		require('css-mqpacker'),
		require('cssnano')
	]
}