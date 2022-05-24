const postcssImport = require("postcss-import")

const postcssConfig = {
    plugins: [
        postcssImport(),
    ]
}

module.exports = postcssConfig;