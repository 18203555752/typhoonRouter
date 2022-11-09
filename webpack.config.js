const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/typhoon.ts',
  devtool: 'nosources-source-map',
  output: {
    filename: 'typhoon.js',
    libraryTarget: 'umd',	//umd表所有模块化规范的集合
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web',
  devServer: {
    hot: true,
    port: 4000
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader']
      // },
      // {
      //   test: /\.jsx?$/,
      //   use: ['babel-loader']
      // },
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  externals: {
    'mapbox-gl': 'mapbox'
  },
  resolve: {
    extensions: ['.ts', ".js", ".json", '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}

// source-map  cheap-module-source-map