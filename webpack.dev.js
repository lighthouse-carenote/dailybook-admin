const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const port = process.env.PORT || 3000;
const DotEnv = require('dotenv-webpack');

module.exports = {
    stats: 'errors-only',
    mode: 'development', 
    entry: './src/index.tsx',
    output: {
        filename:'[contenthash].bundle.js',
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },

    optimization:{
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    },

    resolve: {
      alias: {
          '~': path.resolve(__dirname, 'src'),
      },
      extensions: [".tsx", ".ts", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                  'babel-loader',
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                    },
                  },
                  'eslint-loader',
                ],
                exclude: /node_modules/,
              },

              {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  publicPath: '/',
                },
              },
        ],
    },

    devServer: {
      host: 'localhost',
      port: port,
      open: true,
      historyApiFallback : true ,
  },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),

        new ForkTsCheckerWebpackPlugin({
          eslint: {
            files: './src/**/*.{ts,tsx,js,jsx}',
          },
        }),

        new DotEnv({
          path: './.env.prod',
          safe: true,
          allowEmptyValues: true,
          systemvars: true,
          silent: true,
          defaults: false,
        }),
    ],

    
};