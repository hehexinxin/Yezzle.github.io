let path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\*.js/,
                exclude: [path.resolve( __dirname ,'node_modules')],
                use: {
                    loader:`babel-loader`,
                    options: {
                        presets: [`babel-preset-es2015`]   
                    }
                }
            }
        ]
    },
    mode: 'development',
    plugins: [
        new copyWebpackPlugin([
            {from: './node_modules/jquery/dist/jquery.min.js', to: 'plugins'}
        ])
    ]
    // module: {
    //     rules: [
    //         {
    //             test
    //         }
    //     ]
    // }
}