var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index.bundle.js"
    },
    resolve: {
      modulesDirectories: [
        'node_modules',
        './app/Components'
      ]
    },
    module: {
        loaders:[
            {
              test: /\.js$/,
              exclude: /node.modules/,
              loader: "babel-loader",
              query: {
                presets: ['react', 'es2015']
              }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
