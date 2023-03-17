module.exports = {
    title: '编程资源汇总',
    description: '编程资源汇总',
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
            { text: '前端题库', link: '/interview/front-end/html' },
            { text: '网站导航', link: '/website/work' },
            { text: '软件工具', link: '/tools/tools' },
            { text: '书籍推荐', link: '/books/programming' },
            { text: '电影推荐', link: '/movies/movie' },
            { text: 'GitHub', link: 'https://github.com/yangzhongxun' },
            // { text: '后端学习', link: '/backend/' },
            // { text: 'Java', link: '/java/' },
            // { text: 'Python', link: '/python/' },
            // { text: 'SQL', link: '/sql/' },
            // { text: 'Git', link: '/git/' },
            // { text: '计算机基础', link: '/computer-basic/' },
            // { text: '算法', link: '/algorithm/' },
            // { text: '个人简历', link: '/resume' },
            // { text: 'Projects', link: '/project' },
            // { text: 'Blog', link: '/blog' },
            // { text: 'Email', link: '/email' },
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
                        'basics/operating-system',
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
                        'others/handwritten-code',
                        'others/interview-experience',
                        'others/open-questions'
                    ]
                }
            ],
            '/website/': [
                {
                    title: '工作学习',
                    path: 'work',
                    collapsable: false
                },
                {
                    title: '生活常用',
                    path: 'life',
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
                },
                {
                    title: '购物网站',
                    path: 'shopping',
                    collapsable: false
                }
            ],
            '/tools/': [
                {
                    title: '软件工具',
                    path: 'tools',
                    collapsable: false
                },
                {
                    title: '短链接',
                    path: 'url-shortener',
                    collapsable: false
                },
            ],
            '/books/': [
                {
                    title: '编程',
                    path: 'programming',
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
