const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForJavaScript = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    // This ones can be extracted into a .babelrc file or similar
    presets: [
      [
        "@babel/preset-react", {
          "runtime": 'automatic'
        }
      ]
    ]
  }
}

const ruleForStyles = {
  test: /\.css$/,
  // Loaders charges from left to right, so the order is important
  // style-loader: Allow Webpack to understand CSS (stylesheets)
  // css-loader: transpile external files, calcs and complex CSS functions
  // -- i.e: background: url('./images/wallpaper.png')
  use: ['style-loader', 'css-loader']
}


const rules = [
  ruleForJavaScript,
  ruleForStyles
]

/**
 *
 * @param env
 * @param argv Arguments of the initial config
 * @returns
 */
module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    // You can define an entry point with the 'entry' param, by default it will be as shown below
    // entry: './src/indexjs'
    output: {
      // This is called 'magic strings' and are used to generate hashes for production build files
      // Hashes allow us to cache build files forever so that every build is different
      filename: isProduction ? '[name].[contenthash].js': 'main.js',
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    devServer: {
      open: true, // Opens browser automatically
      port: 3000,
      compress: true
    },
    devtool: 'source-map'
  }
}