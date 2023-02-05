const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    lib: './src/scripts/lib.ts',
    ui: './src/scripts/ui.ts',
    todo: './src/scripts/todo.ts',
    storage: './src/scripts/storage.ts',
    projects: './src/scripts/projects.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'todo list',
      template: './src/index.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?/i,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(jpg|jpeg|gif|svg|png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    runtimeChunk: 'single',
  },
}
