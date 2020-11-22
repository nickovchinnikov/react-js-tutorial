const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const webpackRules = require("./webpackRules");

module.exports = {
  node: {
    Buffer: false,
    process: false,
  },
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
    // globalObject: "(typeof self!='undefined'?self:global)",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      ...webpackRules,
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new WorkerPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
