const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new InlineSourceWebpackPlugin({
      compress: true,
      rootpath: './src',
      noAssetMatch: 'warn'
    }),
    new ZipPlugin({
      filename: 'package.zip',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  {
                    tag: 'source',
                    attribute: 'src',
                    type: 'src'
                  }
                ]
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  performance: {
    maxAssetSize: 1048576,
  }
};
