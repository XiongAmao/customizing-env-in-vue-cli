const webpack = require('webpack')

const customEnv = process.env.WTF

module.exports = {
  configureWebpack: {
    plugins: [
      // 注意自定义全局变量需要在eslintrc 中配置，否则会报错
      new webpack.DefinePlugin({
        MY_CUSTOM_ENV: JSON.stringify(customEnv)
      })
    ]
  }
}
