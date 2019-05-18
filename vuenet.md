---
title : Hosting
---
<vuenet-One/>

After the global installation of vuepress you follow the first 3 steps given in the [official vuepress docs](https://vuepress.vuejs.org/) which are
```bash 
# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build to static files
vuepress build
```
after which your folder structure should be similar to
```
.
|-- README.md
|-- .vuepress
    |-- dist
```
The `dist` folder inside the `.vuepress` folder contains all the static code files required for the site, hence this folder can be hosted to any static-site hoster like [Netlify](https://www.netlify.com/).Now we will see how to deploy the setup where the dist folder is automatically generated and hosted.

## Pre-requisites
### Github repo
### Netlify account
- You can login with your github account or signup at [netlify](https://www.netlify.com/)
### Vuepress as local dependency
- At the root of your project open cmd and type `npm init` and give the git url when it asks then type `npm i vuepress`

## Step 1  
- Push your project to Github ignoring node-modules with a `.gitignore`

## Step 2 
- Go to netlify and click on "New site from Git"

![new from git](assets/img/vuenet_git.png)

- Once authorised select your Github repo.

## Step 3 
- Select the branch (preferably `master`) and enter the `Build command` as `vuepress build` and the `Publish  directory` as `.vuepress/dist`

![deploy](assets/img/vuenet_net.png)

- Then hit `Deploy site`
- Netlify will automatically build the site and deploy as `https://<something>.netlify.com`
- To know about adding a custom domain see [netlify docs](https://www.netlify.com/docs/custom-domains/)

:::tip Congrats
Your site is live with push-to-deploy feature, to check this, you can make change and push to your repo and test it! :tada:
:::

>Found a typo?   
Please ping me [here](https://www.facebook.com/hemanthkumar.uppada.129)

## Thanks for reading :smile:
