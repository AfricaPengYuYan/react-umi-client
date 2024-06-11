export default {
    dev: {
        // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
        '/api/': {
            // 要代理的地址
            target: 'http://localhost:8080',
            // 配置了这个可以从 http 代理到 https
            // 依赖 origin 的功能可能需要这个，比如 cookie
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        },
        '/profile/avatar/': {
            target: 'http://localhost:8080',
            changeOrigin: true,
        },
    },
};
