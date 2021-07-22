import { resolve } from "path"

module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /(node_modules)/,
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist"),
    },
}
