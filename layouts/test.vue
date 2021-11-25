<template>
	<div> 
		<main>  
			<client-only> 
				<test-navbar 
					:logo="logo"  
					:menuLink="menuLink"
					:dropdown="dropdown" 
					:dropdownFull ="dropdownFull" 
					:search="search" 
				>
					<icon-NavbarIcon v-show="icon" /> 
					<NavbarAuth />
				</test-navbar>
			</client-only>

			<Nuxt />  

			<post-Top />
		</main>    	
	</div> 	 
</template>

<script>  
export default {  
	components: {}, 
	mounted () {},  
	data () {
		return { 
			search: true, // false
			icon: true,  
			logo: { 
				text: '4WAO',
				link: '/', 
				color: 'orange', 
      },
			menuLink: [
				{
					navbarLink: [         
						{
							text: "home",
							link: "/"
						}, 
						{
							text: "test",
							link: "/test"
						}, 
						{
							text: "dashboard",
							link: "/test/dashboard/"
						},                          
					] 
				},
				{
					externalLink: [
						{
							text: "Links",
							link: "https://bnsd-content.netlify.app/links/"
						}, 
					]
				}, 
			], 
			dropdown: [    
				{
					text: " topic", 
					content: [ 
						{       
							text: 'text-layout', 
							link: '/test/layout/layout'    
						},
						{
							text: 'category', 
							link: '/category'    
						},  
						{       
							text: 'text-topic', 
							link: ''     
						}, 
						{       
							text: 'text-posts', 
							link: '/test/post/'    
						}, 
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
			dropdownFull: [ 
	 			/* { 
					text: "dropdownFull",
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
				} */  
			]  
		}	
	},
	head() {
		return {
			script: [
				{
					// src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
				}
			],
			link: [
				{
					rel: 'stylesheet',
					// href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
					//href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				}
			]
		}
  }
}
</script>	 

<style lang="postcss" scoped> 
/* .navbar {@apply bg-green-500;} */
html {@apply text-gray-600;}  
body {@apply bg-black md:bg-red-100 lg:bg-white;}  
/* main {@apply min-h-screen ;}  */

h1 { @apply text-gray-500; }
/* h1 { @apply text-red-500; }  */
h2 { @apply text-blue-500; }
h3 { @apply text-green-500; }    
h4 { @apply text-indigo-500 text-lg uppercase; } 
.a {@apply text-cyan-500 hover:text-red-500;} 
</style>