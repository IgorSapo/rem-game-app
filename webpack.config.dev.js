import path from 'path';

export default {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'client'),
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client'),
        exclude: [/node_modules/],
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  }
}