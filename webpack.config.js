module.exports: {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: './client/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            presets: ['@babel/preset-react'],
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
