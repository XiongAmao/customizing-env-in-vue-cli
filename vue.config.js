const webpack = require('webpack')

const customEnv = process.env.WTF

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      MY_CUSTOM_ENV: JSON.stringify(customEnv),
    })
  ]
}
