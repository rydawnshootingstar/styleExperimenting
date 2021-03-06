const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";
const ASSETS_DIR = __dirname + "/src/assets";

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	watch: true,
	entry: [SRC_DIR + "/index.js"],
	output: {
		path: DIST_DIR,
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(html)$/,
				exclude: /node_modules/,
				use: {
					loader: "html-loader",
					options: { minimize: true }
				}
			},
			{
				test: /\.(scss|sass|css)$/,
				exclude: /node_modules/,
				loaders: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1 //,
							//localIdentName: "[local]___[hash:base64:5]"
						}
					},
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: SRC_DIR + "/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		}),
		new CopyPlugin([{ from: ASSETS_DIR, to: DIST_DIR + "/assets" }])
	],
	devServer: {
		contentBase: DIST_DIR,
		hot: true,
		port: 8080
	}
};
