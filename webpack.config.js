const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/index.mjs",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "html2md.js",
        libraryTarget: "umd",
        globalObject: "this",
        library: "tiny"
    }
};

