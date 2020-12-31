module.exports = {
  plugins: [
    ['vuepress-plugin-code-copy', {
      align: 'top',
      color: '#3eaf7c'
    }]
  ],
  base: '/reference/',
  title: 'Reference',
  description: 'Various Documentation',
  
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