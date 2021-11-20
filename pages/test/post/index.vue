<template>
	<div class="container-card"> 
		<div class="card">
			<div class="content">
				<header class="space">
					<post-back></post-back>

					<h1>{{ headLine }}</h1> 
				</header>  

				<article> 
<!--------------------------------------------------------------------->
					<div class=""
						v-for="post of posts"
						:key="post.index"
					> 
						<NuxtLink :to="`/nuxt/${post.slug}`">
						<!-- <NuxtLink :to="'/nuxt/'+post.slug"> -->
								{{ post.title }}
						</NuxtLink>  
					</div>   
<!--------------------------------------------------------------------->
				</article>
			</div>    
		</div> 
  </div>
</template> 

<script>  
export default { 
	layout: 'test', 
  components: {}, 
  data() {
		return {
			headLine: "Nuxt topics",
			posts: []
		}
  },
   
  async asyncData({ $axios }) {
		const { posts } = await $axios.$get('https://api.nuxtjs.dev/rivers')
		return { posts }
  }
}
</script> 

<style lang="postcss" scoped></style>  
