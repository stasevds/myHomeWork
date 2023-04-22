const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
entry:'./src/index.js',
output:{
    filename: "bundle.js",
    path:'./dist'
},
resolve:{
    extensions: ['.js']
},
plugins:[
    
]
}
