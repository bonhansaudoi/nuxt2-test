# nuxt-app 

```
git init
git add . 
git remote add origin https://github.com/bonhansaudoi/.git 
git commit -m "commit" 
git push -u origin master 
```
## Build Setup

```js [nuxt.config.js]
axios: {
  baseURL: 'http://localhost:3000',
},

publicRuntimeConfig: {
  baseURL: process.env.BASE_URL || 'http://localhost:3000/',
},
```

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```  

##

## Vue warn

```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.

TypeError: Object(...) is not a function
- import {} from "~/plugins/";
``` 

## Links

-  https://www.youtube.com/watch?v=Wdmi4k7sFzU&t=2588s

assets/data.js 
export const largeCardSections = [
  {}
]


- https://awesomeopensource.com/projects/boilerplate/nuxt/nuxtjs
- https://github.com/debs-obrien/nuxt-boilerplate-project

- https://nuxt-community.github.io/awesome-nuxt/
- https://strapi.io/blog/how-to-build-an-e-commerce-store-with-nuxt-js-and-strapi

Responsive Navigation Component With Vue 3 & Vue Animations
https://www.youtube.com/watch?v=u2AwJAFeaKc

## Animate.style

- https://animate.style/

### Cross fading images

- http://css3.bradshawenterprises.com/cfimg/
- https://medium.com/cloud-native-the-gathering/how-to-use-css-to-fade-in-and-fade-out-html-text-and-pictures-f45c11364f08
- https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade()



- https://www.jssor.com/demos/banner-rotator.slider

- JavaScript animation https://greensock.com/gsap/

- Glassmorphism

```
+ backdrop-filter: blur(50px);

background-clip: padding-box;
box-shadow: 
background: linenear gradient
```

- css

```
img {
  filter:blur(5px);
}
Navbar
https://github.com/serresebastien/Nuxt-Tailwind-Responsive-Navbar
https://dev.to/armiedema/make-a-mobile-menu-display-and-hide-with-nuxt-vue-54mc
https://www.youtube.com/watch?v=MSK4W0MZZ9w

dropdown
https://www.youtube.com/watch?v=19K6Mg6sOm0&t=93s

Nuxt.js Lazy Loading, Search & Sorting
https://www.youtube.com/watch?v=D_W06CWAwn0