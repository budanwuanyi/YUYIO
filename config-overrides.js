const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = function override(config, env) {
    // 添加 fallbacks
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "url": require.resolve("url/"),
        "buffer": require.resolve('buffer/')
    };
    
    // 添加别名
    config = addWebpackAlias({
        'Buffer': 'buffer'
    })(config, env);

    console.log('config', config);
    
    return config;
};
