const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
		
		libraryTarget: "window",
    path: path.resolve(__dirname, 'dist'),
    filename: 'navislidejs.min.js'
  },
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin("main.css"),
		new Uglify({sourceMap:false, compress:false, beautify:true})
	]
};
