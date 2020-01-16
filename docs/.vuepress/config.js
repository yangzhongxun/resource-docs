module.exports = {
    title: 'New World',
    description: 'New World',
    themeConfig: {
        nav: [
            {
                text: '面试',
                link: '/interview/front-end/html'
            },
            {
                text: '网站',
                link: '/website/'
            },
            {
                text: '工具',
                link: '/tools/'
            },
            {
                text: '书籍',
                link: '/books/js'
            },
            {
                text: '电影',
                link: '/movies/'
            }
        ],
        sidebar: {
            '/interview/': [
                {
                    title: '前端基础',
                    collapsable: false,
                    children: [
                        'front-end/html',
                        'front-end/css',
                        'front-end/js'
                    ]
                },
                {
                    title: '前端框架',
                    collapsable: false,
                    children: [
                        'framework/vue',
                        'framework/react',
                        'framework/webpack'
                    ]
                },
                {
                    title: '计算机基础',
                    collapsable: false,
                    children: [
                        'basics/algorithm',
                        'basics/http',
                        'basics/network',
                        'basics/regular-expression'
                    ]
                },
                {
                    title: '其他',
                    collapsable: false,
                    children: [
                        'others/browser',
                        'others/mobile',
                        'others/front-end-security',
                        'others/performance-optimization',
                        'others/compatible',
                        'others/git',
                        'others/interview-experience',
                        'others/open-questions',
                        'others/handwritten-code'
                    ]
                }
            ],
            '/books/': [
                {
                    title: 'JavaScript',
                    path: 'js',
                    collapsable: false
                }
            ]
        }
    }
};
