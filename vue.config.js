// 기본설정
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// 깃허브 페이지 배포용
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/samdory/',
  outputDir: 'docs',

  devServer: {
    historyApiFallback: true
  }
})