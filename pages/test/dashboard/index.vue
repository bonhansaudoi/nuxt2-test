<template> 
	<div class="container-col lg:my-8">  
    <aside class="lg:w-1/6">
		 <Sidebar :links="links" :dropdown="dropdown" />   
		</aside>

    <div class="lg:w-5/6 lg:mx-8">
      <div class="card"> 
        <div class="content">
					<header class="space">
						<post-back></post-back>

						<h1>{{ headLine }}</h1> 
					</header> 
						

					 

					<article> 
						<div class=""
							v-for="post of posts"
							:key="post.index"
						> 
							<NuxtLink :to="`/nuxt/${post.slug}`">
					
									{{ post.title }}
							</NuxtLink>  
						</div>  

						<h3>readmore</h3>

						<div class="accordation">
							<div class="accordation-btn"> 
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
								</p> 
								<svg-readmore></svg-readmore>
							</div>   
							<div class="accordation-content hidden md:mt-6">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
								</p>  
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
								</p>  
							</div>    
						</div>
				</article>
				</div> 
      </div> 
    </div>
  </div>  
</template> 

<script>  
export default { 
	layout: 'dashboard',  
  data() {
		return {
			headLine: "Nuxt dashboard", 
			links: [         
				{
					text: "home",
					link: "/",
					// <i class="fa fa-fw fa-home"></i>
				}, 
				{
					text: "test",
					link: "/test"
				}, 
				{
					text: "dashboard",
					link: "/dashboard"
				},                          
			],
			dropdown: [               
				{ 
					text: "category",
					content: [
						{       
							text: 'web',
							link: '/content/topic/web'   
						},
						{       
							text: 'adobe',
							link: '/content/topic/adobe'   
						},
						{       
							text: 'window',
							link: '/content/category/window'   
						},
						{       
							text: 'linux',
							link: '/content/category/linux'   
						},
						{       
							text: 'english',
							link: '/content/category/english'   
						} 
					] 				   
				},
				{
					text: " topic ",
					content: [
							{       
								text: 'web',
								link: '/content/topic/web'   
							},
							{       
								text: 'adobe',
								link: '/content/topic/adobe'   
							},
							{       
								text: 'window',
								link: '/content/category/window'   
							},
							{       
								text: 'linux',
								link: '/content/category/linux'   
							},
							{       
								text: 'english',
								link: '/content/category/english'   
							} 
						] 					   
				},
			],  
			posts: [], 
		}
  }, 
  async asyncData({ $axios }) {
		const { posts } = await $axios.$get('https://api.nuxtjs.dev/rivers')
		return { posts }
  }
}
</script> 

<style lang="postcss" scoped> 
h1 {@apply text-orange-500}
.navbar {@apply text-gray-400;
	& .navbar-logo {@apply lg:mr-8; 
		& .logo { @apply text-green-500 hover:text-white;}  
  }  
}
</style>   
