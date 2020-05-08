module.exports = {
    title: 'New World',
    description: 'New World',
    base: '/resource-docs/',
    themeConfig: {
        nav: [
            {
                text: '面试',
                link: '/interview/front-end/html'
            },
            {
                text: '网站',
                link: '/website/public'
            },
            {
                text: '书籍',
                link: '/books/js'
            },
            {
                text: '代码片段',
                link: '/snippet/js'
            },
            {
                text: '电影',
                link: '/movies/ranking'
            }
        ],
        sidebar: {
            '/interview/': [
                {
                    title: '计算机基础',
                    collapsable: false,
                    children: [
                        'basics/data-structure',
                        'basics/algorithm',
                        'basics/http',
                        'basics/network',
                        'basics/operate-system',
                        'basics/design-patterns',
                        'basics/regular-expression'
                    ]
                },
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
            '/website/': [
                {
                    title: '常用网站',
                    path: 'public',
                    collapsable: false
                }
            ],
            '/books/': [
                {
                    title: 'JavaScript',
                    path: 'js',
                    collapsable: false
                },
                {
                    title: '编程之外',
                    path: 'open-eyes',
                    collapsable: false
                }
            ],
            '/snippet/': [
                {
                    title: 'JavaScript',
                    path: 'js',
                    collapsable: false
                },
                {
                    title: 'CSS',
                    path: 'css',
                    collapsable: false
                }
            ],
            '/movies/': [
                {
                    title: '电影',
                    path: 'ranking',
                    collapsable: false
                }
            ]
        }
    }
};
