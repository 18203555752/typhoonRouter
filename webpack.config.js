const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
module.exports = {
  mode: 'development',
  entry: './src/typhoon.ts',
  devtool: 'nosources-source-map',
  experiments: {
    outputModule: true,
  }, 
  output: {
    filename: 'typhoon.js',
    // libraryTarget: 'umd',	//umd表所有模块化规范的集合
    // libraryTarget: 'module',	//umd表所有模块化规范的集合
    library: {
      type: "module"
    },
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web',
  devServer: {
    hot: true,
    port: 4000
  },
  module: {
    rules: [
      //默认情况下 会将所有资源全部添加到代码里
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:4][ext]"
        },
        parser: {
          dataUrlCondition: {//30kb以下使用data url，30kb以上则使用file-loader的方式
            maxSize: 30 * 1024
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
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
    new BundleAnalyzerPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}

// source-map  cheap-module-source-map