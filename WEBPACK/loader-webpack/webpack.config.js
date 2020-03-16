const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  //配置loader 目录
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "src", "loaders")]
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "less-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: path.resolve(__dirname, "src", "loaders", "log-loader") // 使用本地loader
      }
    ]
  }
};
