import path from "node:path";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "production",
  entry: "./styles/app.scss",
  output: {
    path: path.resolve(__dirname, "htdocs/luci-static"),
    filename: "resources/index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "material-components/cascade.css",
            },
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};

export default config;
