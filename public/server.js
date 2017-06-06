const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('webpack.config.dev')
const argv = require('minimist')(process.argv.slice(2))

const host = argv.host || '0.0.0.0'
const port = argv.port || 8000

Object.keys(config.entry).forEach(key => {
  config.entry[key].unshift(
    // 'react-hot-loader/patch',
    // 変更を検知した後、webpack/hot/dev-serverに処理を委譲する
    `webpack-dev-server/client?http://${host}:${port}`
    // HotModuleReplacementPluginにモジュールの更新を行わせる
    // 'webpack/hot/dev-server'
  )
})

config.plugins = [
  // new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
  contentBase: './public',
  publicPath: '/',
  stats: { colors: true },
  historyApiFallback: true,
  host: host,
  hot: true
})

server.listen(port, error => {
  if (error) {
    console.log(error)
    return
  }
  console.log(`Listening at ${host}:${port}`)
})
