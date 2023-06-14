const path = require('path');
const fs = require('fs-extra');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

const pjson = require('./package.json');
//var outputPath = path.resolve(__dirname, '../project/noodl_modules/' + pjson.name);
console.log("NB output is outside of this project, /Users/mathiaslevin/Documents/Noodl/griddomax/noodl_modules/noodl-masonry/");
//ar outputPath = path.resolve(__dirname, '/Users/mathiaslevin/Documents/Noodl/griddomax/noodl_modules/noodl-masonry');
var outputPath = path.resolve(__dirname, '/Users/mathiaslevin/Library/Application\ Support/Noodl/projects/c47d5c1c-533d-43b0-9e53-d9a4de2237f8/noodl_modules/noodl-masonry');
// as an alternative you can direct the output to a specific project
// it works the same way on Windows, but the path is slightly different
// var outputPath = '/Users/some-user/Library/Application\ Support/Noodl/projects/some-long-guid/noodl_modules/' + pjson.name;

function stripStartDirectories(targetPath, numDirs) {
    const p = targetPath.split('/');
    p.splice(0, numDirs);
    return p.join('/');
}

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: outputPath
    },
    externals : {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: [".js", ".json", ".css"]
    },
    plugins: [
        new CleanWebpackPlugin(outputPath),
        new CopyWebpackPlugin([
            { from: 'assets/**/*', transformPath: targetPath => stripStartDirectories(targetPath, 1) },
        ]),

        // Copy the generated module files to the tests project if it exists
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    if(fs.existsSync(path.resolve(__dirname, '../tests'))) {
                        fs.copySync(outputPath, path.resolve(__dirname, '../tests/noodl_modules/' + pjson.name));
                    }
                })
            }
        }
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env",{modules: false}], "@babel/preset-react"],
                        ignore: [] 
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};
