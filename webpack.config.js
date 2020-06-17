const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {

    entry:'./app/assets/scripts/App.js',
    output:{
        filename:'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
<<<<<<< HEAD
    mode:'development',
    watch: true,
=======
    devServer:{
        before:function(app,server){
            server._watch('./app/**/*.html````````````````````````');
        },
        contentBase:path.join(__dirname,'app'),
        hot:true,
        port:3000,
        host:'0.0.0.0'
    },
    mode:'development',
>>>>>>> 9c6f6e2568410eb3a18ba1bceb2f68c13275eb61
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]            }
        ]
    }

}