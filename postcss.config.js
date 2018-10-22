const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins: [
        postcssPresetEnv({
            browsers: [
                "last 5 versions",
                "ie 11",
                "safari >= 7"
            ]
        }),
        require('cssnano')
    ]
};
