# VuePress

## Installation

1. Create project folder & initialize
``` bash
/* ./projectName */
npm init 
```

2. Install VuePress locally
``` bash
npm install -D vuepress
```

3. Add `run` scripts to `package.json`
``` json
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}

/* npm run docs:dev */
```

<br>

___


## Directory Structure

* A folder in docs for each topic.
  * index.md = topic landing page
  * additional pages as needed
* .vuepress folder holds [config files](https://vuepress.vuejs.org/config/) and assets
  * `config.js` defines general settings and routes


``` md
.
├── docs/
│   ├── index.md
│   │ 
│   ├── .vuepress/
│   │   ├── config.js
│   │   │
│   │   ├── components/
│   │   │   └── CustomComponent.vue
│   │   ├── public/
│   │   │   └── ~images, icons, etc.
│   │   ├── theme/
│   │   │   └── Layout.vue
│   │   ├── styles/
│   │       ├── index.styl
│   │       └── palette.styl
│   │ 
│   ├── page_folder/ 
│   │   ├── index.md 
│   │   ├── page2.md
│   │ 
│   ├── page_folder/
│       ├── index.md 
│       ├── page2.md  
│ 
└── package.json
```

<br>

___


## Home Page `frontmatter`
``` md
---
home: true
heroImage: /image.png
heroText: Header text
tagline: sub header text
actionText: init →
actionLink: /folder/
# features:
# - title: Left Feature
#   details: I am the 'First' feature.
# - title: Center Feature
#   details: I'm the smart one.
# - title: Right Feature
#   details: I'm the cute one.
footer: MIT Licensed | Copyright © 2021-present Rob
pageClass: custom-homepage-class
---
```

