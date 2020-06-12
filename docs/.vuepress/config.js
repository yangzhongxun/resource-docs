module.exports = {
    title: '前端资源汇总',
    description: '前端资源汇总',
    base: '/resource-docs/',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'yangzhongxun/resource-docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'yangzhongxun/resource-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',

    lastUpdated: '上次更新',
    themeConfig: {
        nav: [
            { text: '面试', link: '/interview/front-end/html' },
            { text: '网站', link: '/website/public' },
            { text: '代码片段', link: '/snippet/js' },
            { text: '书籍', link: '/books/js' },
            { text: '电影', link: '/movies/movie' }
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
                },
                {
                    title: '技术栈',
                    path: 'technology',
                    collapsable: false
                },
                {
                    title: 'Children',
                    path: 'children',
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
            '/movies/': [
                {
                    title: '电影',
                    path: 'movie',
                    collapsable: false
                },
                {
                    title: '电视剧',
                    path: 'series-tv',
                    collapsable: false
                }
            ]
        }
    }
};
