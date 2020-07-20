module.exports = {
    runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
    publicPath: '',
    productionSourceMap: false, //不在production环境使用SourceMap
    css: {
        loaderOptions: {
            sass: {
                data: `
              @import "@/assets/styles/_variable.scss"; // 路径自配
            `
            }
        }
    },
    devServer: {
        //跨域
        port: 9527, // 端口号
        open: true, //配置自动启动浏览器
        proxy: {
            // 配置跨域处理 可以设置多个
            '/api': {
                target: 'xxxx',
                ws: true,
                changeOrigin: true
            }
        }
    }
}