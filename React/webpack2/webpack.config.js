const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    name:'jin',
    mode:'development',  //production
    devtool:'eval', //hidden-source-map
    
    resolve:{
        extensions:['.js','.jsx']
    },
    // 입력받을 내용들
    entry:{
        app:['./index.jsx']
    },

    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 5% in KR','last 2 chrome versions']
                        },
                        debug:true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }]
    },
    plugins:[
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}),
        new MiniCssExtractPlugin({filename:'app.css'})
    ],
    //내보낼 내용들
    output:{
        path:path.join(__dirname,'dist'), //현재 디랙토리 + dist까지 www/user/ingoo
        filename:'app.js',
        publicPath:'/dist/'
    },
    devServer:{
        publicPath:'/dist/',
        hot:true,
    }
}