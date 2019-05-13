const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: {
		app: './resources/js/app.js'
	},
	output: {
		path: path.resolve(__dirname, './public/js/'),
		filename: 'app.js'
	},
	devtool: NODE_ENV === 'development' ? 'source-map' : null,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', { loader: 'postcss-loader',
					options: {
						plugins: [require('autoprefixer')]
					} }, 'sass-loader']
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			open: false,
			proxy: 'http://127.0.0.1:8000'
		}),
		new MiniCssExtractPlugin({
			filename: '../css/app.css'
		}),
		new VueLoaderPlugin()
	],
	externals: {
		jquery: 'jQuery'
	}
};
