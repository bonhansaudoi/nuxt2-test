
## Template

```vue [index.md]
<template>
	<div></div> 
</template>

<script>
import  from "~/components/"; 

export default {
  layout: '',
	components: {}, 
  props: {},  
  data () {
		return {} 
  }
}
</script>

<style lang="postcss"></style>  
```

## Data

```js [script]  
  data () {
    return {
      text: '',
      logo: {},  
      navbarLink: [
        {}, 
      ]
    }
  } 
```
 
## Layouts

```vue [layouts/default.vue]
<template>
	<div>  
		<client-only>  
			<ModalForm />   
			<ModalProfile /> 
		</client-only> 

		<main>  
			<client-only> 
				<navbar 
					:logo="logo"  
					:menu ="menu"
					:search="search" 
				> 
					<NavbarAuth />
				</navbar>
			</client-only>

			<Nuxt />  

			<post-top />
		</main>    	
	</div>
</template>  

<script> 
import ModalForm from "~/components/modal/ModalForm";  
import ModalProfile from "~/components/modal/ModalProfile"; 
  
export default { 
	layout: 'test',
	components: { 
		ModalForm, 
		ModalProfile
	},  
	data () {
		return {
			search: true, //false
			logo: { 
				text: '4WAO',
				link: '/', 
				color: 'orange', 
      },
			menu: [
				{
          navbarLink: [
            {
							text: "",
							link: ""
						}, 
          ]
        },
        {
          dropdown: [
            {
							text: "", 
							content: [ 
                {
                  text: '', 
									link: ''   
                }
              ]
            },
          ]
        } 
      ]
    }
  },
  head() {
		return {
			script: [
				{ src: '' } 
			],
			link: [
				{ rel: 'stylesheet', href:"" }
      ]
    }
  }
}
</script>	

<style lang="postcss" scoped> 
</style>
```
 
```vue [layouts/dashboard.vue]
<template> 
  <main>  
    <client-only> 
      <navbar 
        :logo="logo"  
        :menu ="menu"
        :search="search" 
      >  
      </navbar> 
    </client-only> 

    <Nuxt />   
  </main> 
</template> 

<script> 
export default {
  layout: 'dashboard', 
  middleware: [], 
  data: () => ({

  })
}
```

## Posts

```vue [posts.vue]
<template>
  <div class=""
    v-for="post of posts"
    :key="post.index"
  > 
    <NuxtLink :to="`/nuxt/${post.slug}`"> 
      {{ post.title }}
    </NuxtLink>  
  </div>  
</template>

<script>
export default { 
  async asyncData({ $axios }) {
    const { posts } = await $axios.$get('https://api.nuxtjs.dev/rivers')
    return { posts }
  }
}
<script>
```

```vue [_slug.vue]
<template>
  <article>
    {{ post.description }}
  </article> 
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let post = await $axios.$get(`https://api.nuxtjs.dev/rivers/${params.slug}`) 
    return { post }
  }
} 
</script>
``` 
