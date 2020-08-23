module.exports = {
	plugins: [
		require('postcss-preset-env')({
			stage: 0,
			autoprefixer: {
				grid: true,
			},
			preserve: false,
		}),
		require('postcss-apply'),
		require('postcss-custom-media')({
			preserve: false,
		}),
		require('postcss-custom-selectors')
	]
}