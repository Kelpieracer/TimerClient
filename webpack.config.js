var HtmlWebpackPlugin = require("html-webpack-plugin");

// const path = require("path");

// module.exports = {
//   mode: "none",
//   entry: {
//     app: path.join(__dirname, "src", "index.tsx"),
//   },
//   target: "web",
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         exclude: "/node_modules/",
//       },
//     ],
//   },
//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };
//----------

const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
    ],
  },
  resolve: {
    mainFiles: ["index", "Index"],
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "https://localhost:44357",
    }),
  },
};
