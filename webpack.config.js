const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const PATHS = require("./paths");
require("dotenv").config();

module.exports = {
	entry: path.join(PATHS.SRC, "index.js"),
	output: {
		filename: "[name][hash].js",
		path: path.resolve(PATHS.DIST),
	},

	watchOptions: {
		aggregateTimeout: 100,
		ignored: ["node_modules/**"],
	},
	resolve: {
		extensions: [".js"],
		alias: {
			assets: path.resolve(PATHS.ASSETS),
			src: path.resolve(PATHS.SRC),
		},
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /.scss$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					"sass-loader",
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(PATHS.PUBLIC, "index.html"),
		}),
	],
};
