var path = require('path');

module.exports = {
    entry: {
        'query': './es2015/query.js'
    },
    output: {
        path: path.join(__dirname, '/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    devtool: 'source-map'
};