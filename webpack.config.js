const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "cutter-sanborn.min.js",
    library: "CutterSanborn",
    libraryTarget: "umd",
    globalObject: "this",
    clean: false, // Don't clean dist since we also have npm build output there
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    // If you want to exclude dependencies from the bundle, list them here
    // For a CDN build, you typically want to include all dependencies
  },
};
