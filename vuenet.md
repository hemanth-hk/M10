---
title : Hosting vuepress site
---
<vuenet-One/>

After you follow the first 3 steps given in the [official vuepress docs](https://vuepress.vuejs.org/) which are
```bash 
# install
yarn global add vuepress # OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```
and your folder structure should be 
```
.
|-- README.md
|-- .vuepress
    |-- dist
```
The `dist` folder inside the `.vuepress` folder contains all the static code files required for the site, hence this folder can be hosted to any static-site hoster like [Netlify](https://www.netlify.com/).