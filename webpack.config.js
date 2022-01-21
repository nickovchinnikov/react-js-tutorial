const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackRules = require("./webpackRules");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      types: path.resolve(__dirname, "src/types"),
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./index.js",
    publicPath: "/",
    // https://github.com/GoogleChromeLabs/worker-plugin/issues/20
    globalObject: "(typeof self!='undefined'?self:global)",
  },
  module: {
    rules: [
      {
        test: /(?<!module)\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.worker\.(ts|js)$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /(?<!module)\.s([aс])ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /module\.s([aс])ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]-[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      ...webpackRules,
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
