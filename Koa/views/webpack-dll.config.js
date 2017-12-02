const webpack=require('webpack');
const vendors = [
    'react',
    'react-dom',
    'react-router',
    'antd',
    'react-router-dom',
];

module.exports = {
    output: {
        path: __dirname,
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};