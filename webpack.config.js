const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const tsConfigPath = require("tsconfig-paths-webpack-plugin");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDev = !(process.env.NODE_ENV === "production");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    plugins: [new tsConfigPath()]
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Template Web React"
    }),
    new ForkTSCheckerWebpackPlugin()
  ]
};
