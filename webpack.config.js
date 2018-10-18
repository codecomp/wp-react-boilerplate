const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const webpackMerge = require('webpack-merge');

// We can include Webpack plugins, through addons, that do not need to run every time we are developing.
const addons = (/* string | string[] */ addonsArg) => {

    // Normalize array of addonss
    let addons = [...[addonsArg]]
        .filter(Boolean);

    return addons.map(addonName =>
        require(`./build-utils/addons/webpack.${addonName}.js`)
    );
};

// 'env' will contain the environment variable from 'scripts' section in 'package.json'.
module.exports = env => {

    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    }

    const envConfig = require(`./build-utils/webpack.${env.env}.js`);

    const mergedConfig = webpackMerge(
        commonConfig,
        envConfig,
        ...addons(env.addons)
    );

    return mergedConfig;
};
