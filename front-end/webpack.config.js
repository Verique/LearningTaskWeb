const path = require('path');

module.exports = function (webpackEnv) {
    process.env.NODE_ENV = 'development';
    return {
        entry: './src/index.tsx',
        mode: 'development',
        devServer: {
            static: './dist',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    }
};