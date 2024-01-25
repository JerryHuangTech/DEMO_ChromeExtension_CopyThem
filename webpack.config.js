const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const manifest = require('./src/manifest.json');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    content: './src/content.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@style': path.resolve(__dirname, 'src/static/style'),
    },
    extensions: [ '.js', '.ts', '.json', 'html', 'less',],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        //{ from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/Static/img/', to: 'img/' },
      ],
    }),
    new WebpackManifestPlugin({
      seed: manifest,
      generate: (seed, files) => {
        // 更新版本號
        seed.version = getVersion();
        return seed;
      },
    }),
  ],
};

//Manifest.json版本號控制
function getVersion() {
  const date = new Date();
  //const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `1.13.${month}${day}.${hour}${minute}`;
}