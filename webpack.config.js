const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT_PATH = __dirname;
const env = process.env.NODE_ENV === 'production';
console.log("当前运行环境", process.env.NODE_ENV);

let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    }),
    new webpack.DefinePlugin({
        // 定义全局变量
        'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
];

if (env) {
    plugins.push(
        new ExtractTextPlugin("style.css"),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false
        }))
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
    devtool: env ? 'source-map' : 'eval-source-map', //
    entry: {
        vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux'],
        app: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', ROOT_PATH+"/src/index.js"]
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].js',
        publicPath: "/dist/"
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    },

    module: {
        rules: [{
                test: /\.jsx|\.js/, 
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                use: env ? ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    "postcss-loader",  "less-loader"]
                }) : ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }, "postcss-loader",  "less-loader"]
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
            }]
    },
    plugins,
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: "localhost",
        port: "9999",
        publicPath: "/dist/"
    }
}