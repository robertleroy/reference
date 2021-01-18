module.exports = {
  base: '/reference/',
  title: 'Reference',
  description: 'Various Documentation',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  plugins: [
    ['vuepress-plugin-code-copy', {
      align: 'top',
      color: '#3eaf7c'
    }]
  ],
  themeConfig: {
    logo: '/encyclopedia.png',
    smoothScroll: true,
    lastUpdated: 'Updated',
    // sidebarDepth: 2,
    nav: [
      {text: 'Vue', link: '/vue/'},
      {text: 'Filters', link: '/filters/'},
      // {text: 'VuePress', link: '/vue_press/'},
      {text: 'Components', link: '/components/'},
      {text: 'GH-Pages', link: '/gh-pages/'},
      // {text: 'Lorem', link: '/lorem/'},
      {text: 'Utility', link: '/utility/'},
      {text: 'Test', link: '/test/'},
    ],
    sidebar: {
      '/vue/': vueSidebar('Vue', 'Vue'),
      '/filters/': filterSidebar('Filters','Directives'),
      // '/vue_press/': vuepressSidebar('VuePress', 'VuePress'),
      '/components/': componentsSidebar('Components'),
      '/gh-pages/': ghPagesSidebar('GH-Pages', 'Deploy'),
      // '/test/': loremSidebar('Lorem', 'Lorem'),
      '/test/': testSidebar('Test', 'Test'),
      '/utility/': utilitySidebar('Utility')
    }
  }
}

function vueSidebar(groupA, tagA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['', tagA],
        'vue-router',
        'vuex',
        'vuePress'
      ]
    },
  ]
}

function filterSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['', 'Filters'],
        // '',
        'dateFormat'
      ]
    },
    {
      title: groupB,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['directives','Directives'],
      ]
    }
  ]
}

function vuepressSidebar(groupA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ''
      ]
    },
  ]
}

function componentsSidebar(groupA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['', 'Accordion'],
        ['checkbox', 'Checkbox'],
        'svgIcon',
        'svg',
        'tabs',
        ['draglist','Draglist'],
        ['snippets','Snippets'],

      ]
    },
  ]
}

function testSidebar(groupA, tagA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['', tagA]
      ]
    },
  ]
}

function ghPagesSidebar(groupA, tagA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        ['', tagA]
      ]
    }
  ]
}

function utilitySidebar(groupA) {
  return [
    {
      title: groupA,
      // sidebarDepth: 2,
      collapsable: false,
      children: [
        '',
        ['ipsum', 'Ipsum'],
      ]
    }
  ]
}