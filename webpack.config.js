const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
    devServer: {
        public: 'localhost',
        historyApiFallback: true,
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost',
            'webpack/hot/only-dev-server',
            './app/index'
        ]
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },
          {
              test: /\.(svg|jpeg)$/,
              use: [ 'file-loader' ]
          }
        ]
    },
    resolve: {
        modules: [ path.resolve(__dirname, './app'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
