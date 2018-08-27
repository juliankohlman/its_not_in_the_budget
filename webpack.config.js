const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		mode: 'development',
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		performance: { hints: false },
		module: {
			rules: [
				{
					// loader (defining how a file gets used)
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: ['css-loader', 'sass-loader']
					})
				}
			]
		},
		plugins: [CSSExtract],
		devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	};
};