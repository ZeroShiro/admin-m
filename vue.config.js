module.exports = {
  devServer: {
    open: true,
    port: 1234
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variavle.scss";`
      }
    }
  },
  configureWebpack: {
    externals: {
      BMap: 'BMap'
    }
  }
};
