


## Create repository 
> Create repository && Initial commit
``` bash
# https://github.com/robertleroy/PROJECT_NAME 

git init
git add .
git commit -m 'first commit'
git remote add origin https://github.com/robertleroy/PROJECT_NAME.git
git push -u origin master
```

## deploy.sh
* `base` to `PROJECT_NAME` in `config.js`
``` js
module.exports = {
  base: '/PROJECT_NAME/',
}
```
* Create `deploy.sh` in root folder

*adjust script as neccesary*

`<!-- ./deploy.sh -->`

<code-group>
  <code-block title="Vue">
  ``` bash
  #!/usr/bin/env sh

  # abort on errors
  set -e

  # build
  npm run build

  # navigate into the build output directory
  cd dist

  # if you are deploying to a custom domain
  # echo 'www.example.com' > CNAME

  git init
  git add -A
  git commit -m 'deploy'

  git push -f git@github.com:robertleroy/reference.git master:gh-pages

  cd -
  ```

  
  ``` json
  /* package.json */
  "scripts": {
    
    "deploy": "./deploy.sh"
  },
  ```

  make command executable
  ``` bash
  chmod +x ./deploy.sh
  ```

  deploy
  ``` bash
  npm run deploy
  ```
  </code-block>

  <code-block title="VuePress">
  ``` bash
  #!/usr/bin/env sh

  # abort on errors
  set -e

  # build
  npm run docs:build

  # navigate into the build output directory
  cd docs/.vuepress/dist

  # if you are deploying to a custom domain
  # echo 'www.example.com' > CNAME

  git init
  git add -A
  git commit -m 'deploy'

  # if you are deploying to https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

  # if you are deploying to https://<USERNAME>.github.io/<REPO>
  git push -f git@github.com:robertleroy/reference.git master:gh-pages

  cd -
  ```

  
  ``` json
  /* package.json */
  "scripts": {
    
    "deploy": "./deploy.sh" ???
    "deploy": "sh deploy.sh" ???
  },
  ```

  make command executable
  ``` bash
  chmod +x ./deploy.sh ??
  chmod +x deploy.sh ??
  ```

  deploy
  ``` bash
  npm run deploy
  ```

  </code-block>
</code-group>



``` bash
git add . && git commit -m 'update'
git push
npm run deploy
```




