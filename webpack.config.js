"use strict";

const path = require("path");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**@type {import('webpack').Configuration} */
const commonConfig = {
  name: "common",
  devtool: "source-map",
  stats: "errors-only",
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|woff2?|eot|ttf|svg)$/i,
        exclude: /node_modules/,
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({ clearConsole: false }),
    new WebpackBar(),
  ],
};

/**@type {import('webpack').Configuration} */
const clash_components = {
  name: "clash_components",
  target: "node",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "clash-components.js",
    libraryTarget: "commonjs2",
    // devtoolModuleFilenameTemplate: "../[resource-path]",
    // clean: true,
  },
  ...commonConfig,
};

/**@type {import('webpack').Configuration} */
const website = {
  name: "website",
  target: "web",
  entry: "./web/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "web", "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "web/src/index.html",
    }),
  ],
  ...commonConfig,
};

module.exports = [clash_components, website];
