const path=require('path')
const common=require('./webpack.common')
const { merge } = require('webpack-merge') 
module.exports = merge(common,{
    mode:"development",
    // watch:true,
    output:{
        filename:"[name].bundle.js",
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
                   "style-loader", //inject in dom
                   "css-loader",   //turn css in common js 
                   //"sass-loader"  //turn into css
                ]
            }
        ]
    }
});