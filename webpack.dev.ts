import path from "node:path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { commonWebpackConfig } from "./webpack.common";

const publicRootDir = path.join(__dirname, "public-dev");

const devServerConfig: DevServerConfiguration = {
  static: {
    directory: publicRootDir,
  },
};

const config: Configuration = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    path: publicRootDir,
  },
  devServer: devServerConfig,
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(__dirname, "src/assets"), to: path.join(publicRootDir, "assets") },
      ],
    }),
  ],
};

export default merge(commonWebpackConfig, config);
