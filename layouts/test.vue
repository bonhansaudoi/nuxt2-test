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
// import { accordation } from "~/plugins/toggle.js";  
export default { 
	layout: 'test',
	components: { 
		ModalForm, 
		ModalProfile
	},  
	mounted () { 
		// accordation(); 
	}, 
	data () {
		return {
			search: true, 
			logo: { 
				text: '4WAO',
				link: '/', 
				color: 'orange', 
      },
			menu: [
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
					], 
				},
 				{		
					dropdown: [    
						{
							text: " topic", 
							content: [ 
								{       
									text: 'layout', 
									link: '/test/layout/layout'    
								},
								{       
									text: 'topic', 
									link: '/test/post/'     
								},
								{       
									text: 'posts', 
									link: '/test/post/posts'    
								},
								{       
									text: 'post', 
									link: '/test/post/post'    
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
				},	
				{	 
					dropdownFull: [ 
						{ 
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
						},
					] 
				}	 
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
</style>