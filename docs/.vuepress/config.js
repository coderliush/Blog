/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-02-01 19:38:36
 * @LastEditors: liushuhao
 */
const nav = require('./nav.js')
const sidebar = require('./sidebar.js')

module.exports = {
    title: 'lsh blog',
    description: '慎终如始',
    markdown: {
        lineNumbers: true
    },
    extraWatchFiles: [
        './nav.js',
        './sidebar.js'
    ],
    themeConfig: {
        sidebarDepth: 2,
        smoothScroll: true,
        // nav,
        sidebar,
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 Github 上编辑此页',
        // lastUpdated: '更新时间',
    },
    plugins: [
        ["@vuepress/medium-zoom",true],
        ["@vuepress/back-to-top",true],
    ],
}