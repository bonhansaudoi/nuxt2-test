<template>
	<div class="container-card"> 
		<div class="card">
			<div class="content">
				<header class="space">
					<post-back></post-back>

					<h1>{{ title }}</h1> 
				</header>  

				<article></article>   
					<div class=""
						v-for="post of posts"
						:key="post.slug"
					> 
					<NuxtLink :to="`/category/${post.slug}`">  
								{{ post.title }}
						</NuxtLink>  
					</div>    
				
			</div>    
		</div> 
  </div>
</template> 

<script>  
export default {  
  components: {}, 
  data() {
		return {
			title: "Nuxt posts"
		}
	},
  async asyncData({$axios}) {
		const posts = await $axios.$get('https://api.nuxtjs.dev/rivers')
		return { posts }
	}
}
</script> 

<style lang="postcss" scoped></style>  