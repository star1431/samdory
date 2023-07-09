// 기본설정
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 깃허브 페이지 배포용 (서브경로사용)
// const { defineConfig } = require('@vue/cli-service');
// const history = require('connect-history-api-fallback');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/samdory/',
//   outputDir: 'docs',

//   devServer: {
//     historyApiFallback: {
//       rewrites: [{ from: /.*/, to: '/samdory/' }]
//     },
//     onBeforeSetupMiddleware: (server) => {
//       server.app.use(history({}));
//     },
//   },
// });