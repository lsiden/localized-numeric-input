var path = require('path')

module.exports = {
    entry: './index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js',
    },
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
		]
	},
    devtool: 'source-map',
}