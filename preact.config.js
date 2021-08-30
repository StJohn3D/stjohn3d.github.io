import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

/** Removes new lines, HTML comments, and unneeded spaces */
const minifyHtml =
  /([\n\r] *|<!--.*-->)|( *(?=[<\/>()\+\.\"=?:]))|((?<=[=+]) *)/gms;

export default (config, env, helpers) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*",
          context: path.resolve(__dirname, "public"),
          // The `content` argument is a [`Buffer`](https://nodejs.org/api/buffer.html) object, it could be converted to a `String` to be processed using `content.toString()`
          // The `absoluteFrom` argument is a `String`, it is absolute path from where the file is being copied
          transform(content, absoluteFrom) {
            if (absoluteFrom.includes("404.html")) {
              return Promise.resolve(
                content.toString().replace(minifyHtml, "")
              );
            }
            return Promise.resolve(content);
          },
        },
      ],
    })
  );
};
