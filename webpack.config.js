module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
        {test: /\.css$/,loader: 'style-loader'},
        { test: /\.css$/, loader: 'css-loader' },
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query:{
                    presets: ['es2015','stage-0','react'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
}