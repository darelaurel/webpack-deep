const path=require('path')

var HTMLWebpackPlugin=require('html-webpack-plugin')

//var uglifyJS=require('uglifyjs-webpack-plugin')

/***
 * HtmlWebpackPlugin génère un fichier HTML final contenant le JS avec un filename hashé
 * ce qui fais que le JS est en cache,
 * les nouvelles modif sont juste intégrés
 * pas de rechargement de script
 * on doit avoir une page template.html, page que le fichier html généré va intégrer
 */

module.exports = {
    //watch:true,
    entry:
    {
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    plugins:
    [
        new HTMLWebpackPlugin({template:"./src/template.html"}),
        //new uglifyJS()
    ],
    module:{
        rules:
        [
            {
                test:/\.html$/,
               //test:/\.scss$/,
               use:
               [
                   "html-loader" 
               ]
            },
            {
                test:/.(svg|png|jpg|jpeg)$/,
               //test:/\.scss$/,
               use:
                {
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].ext",
                        outputPath:"imgs"
                    }
                }
            }
        ]
    }
}