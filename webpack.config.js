const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',
	devServer: {
		open: true,
		host: '127.0.0.1',
		port: 9999,
		proxy: {
			'/apis': {
				target: 'http://192.168.0.224:18090', // 接口域名
				ws: true,
				changeOrigin: true // 是否跨域
			}
		},
		contentBase: path.resolve(__dirname, 'dist') // contentbase和publicPath参考  https://blog.csdn.net/wang839305939/article/details/85855967
	},
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	plugins: [
		new HtmlPlugin({
			template: './src/index.html'
		}),
		new MiniCssPlugin({
			filename: 'css/bundle.css'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			// { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			// { test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
			// { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.(js|jsx)$/, use: [ 'babel-loader' ], exclude: /node_modules/ },
			{ test: /\.css$/, use: [ MiniCssPlugin.loader, 'css-loader' ] },
			{ test: /\.less$/, use: [ MiniCssPlugin.loader, 'css-loader', 'less-loader' ] },
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssPlugin.loader,
						options: { publicPath: '..' }
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 20480,
					name: '[name].[ext]',
					outputPath: 'img'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	}
}
