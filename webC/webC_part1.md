---
title : Part-1
---
<Title mainTitle="WTF are web components?" description="Getting started with web components and web components in svelte" minOfread="2min read" />

Web components are reusable custom elements which have a shadow dom attached to it.   
Any web component can basically be divided into 3 main parts;
* **Custom element**: The javascript API's responsible for creating the element-tag and defining it's behavior
* **Shadow DOM**: The main element tree that is used to render the custom element to the main-DOM
* **HTML templates**: The `<template>` and `<slot>` tags are used to define the HTML present inside the shadow DOM   
To read more about web components click [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Pre-requisites
To follow along you should know javascript and a bit of [svelteJS](https://svelte.dev/) or any other front-end framework which supports web components.
> You don't need to know svelte or any other framework to create web components but a framework make it a bit easier to create them

## Why svelte?
Svelte compiles your code directly into vanilla javascript so if you write your web component in vanilla javascrpt the bundle size would be very similar and svelte comes with some cool features which we would be using.

## Setup
### Step 1
Get the svelte web component template and install the dependencies

``` bash
npx degit sveltejs/component-template my-new-component # name of your component goes here
cd my-new-component
npm i # or yarn
```
### Step 2
Once downloading the template is done there are minor changes required to make it work properly
1.  Add the `customElement` property in the `rollup.config.js`
``` javascript
    plugins: [
        svelte({
            customElement: true,
        }),
        resolve()
    ]
```
2. Add `<svelte:options tag="your-tag-name"/>` at the top of the `Component.svelte` file in the `src` directory and you should be good to go.

## Hello World web component
To create a web component you need to write some code in the `Component.svelte`, something like this
``` html
<svelte:options tag="hello-world"/>
<script>
    export let name
</script>
<main>
<h1>Hello { name }!</h1>
</main>
```
clearly `name` is a prop and we will see how to send data into the component but for now just run `npm run build`. This will create two files in the `dist` folder namely `index.js` and `index.mjs`. That's it your web component is created

## Use the hello-world component
To the hello-world component that we just created we need to import the `index.js` into a html and run it on a server
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Web components</title>
    <script src="./index.js"></script>
</head>
<body>
    <hello-world name="world"></hello-world>
</body>
</html>
```
clearly the prop `name` that needs to be passed is sent as an attribute to the web component and the web component recieves it and displays it, however if we don't pass anything it will display `undefined`.  

>Found a typo?   
Please ping me [here](https://twitter.com/runtimeTerror17)

## Thanks for reading :smile:
