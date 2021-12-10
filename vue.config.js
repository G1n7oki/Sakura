module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 4396,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
