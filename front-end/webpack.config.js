const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = function (webpackEnv) {
  return {
    entry: "/src/index.tsx",
    mode: "development",
    devServer: {
      static: { directory: "./dist", watch: true },
      historyApiFallback: true,
      hot: true,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css"],
    },
    output: {
      publicPath: "/",
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ESLintPlugin({ extensions: ["ts", "tsx"] }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
    ],
  };
};
