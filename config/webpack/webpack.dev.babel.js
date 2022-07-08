const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: paths.outputPath,
        chunkFilename: '[name].js',
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 20000000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            );
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    devServer: {
        static: paths.outputPath,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map'
};
