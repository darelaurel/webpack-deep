const path=require('path')
const common=require('./webpack.common')
const { merge } = require('webpack-merge')
const miniCss=require('mini-css-extract-plugin')

module.exports = merge(common,{
    mode:"production",
    // watch:true,
    output:{
        filename:"[name].[contentHash].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:
    {
        rules:
        [
            {
                test:/\.css$/,
                exclude:/(node_modules|bower_components)/,
                //test:/\.scss$/,
                use:
                [
                    miniCss.loader, //extract into files
                   "css-loader",   //turn css in common js 
                   //"sass-loader"  //turn into css
                ]
            }
        ]
    },
    plugins:[new miniCss({
         filename: "[name].[contentHash].css"
    })],
});