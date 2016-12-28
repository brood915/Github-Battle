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
    resolve: {/*allows to do "import MyComponent from 'MyComponent'"*/
      modulesDirectories: [
        'node_modules',
        './app/Components'
      ]
    },
    module: {
        loaders:[
            {test: /\.js$/, exclude: /node.modules/, loader: "babel-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
