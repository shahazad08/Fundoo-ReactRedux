const webpack = require('webpack');
module.exports = {
    entry:['babel-polyfill', './src/index.js'],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
            {
            loader: "file-loader",
            options: {
            name: '[path][name]-[hash:8].[ext]'
            },
            },
            ]
            },
          {
            test: /\.less$/,
            use: [
            {
            loader: "style-loader"
            },
            {
            loader: "css-loader",
            options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
            }
            },
            {
            loader: "less-loader",
            }
            ]
            },

        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true,
    }
  };