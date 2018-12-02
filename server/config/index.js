function getConfig(env) {
    const config = require(`./${env}`).default;
    if (config) {
        return config;
    } else {
        throw `Config doesn't exist for '${env}' environment.`;
    }
}

export {
    getConfig
};
