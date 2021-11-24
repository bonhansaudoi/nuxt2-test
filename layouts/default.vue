<template>
	<div>   
		<main>  
			<!-- <client-only> 
				<test-navbar 
					:logo="logo"  
					:menuLink="menuLink"
					:dropdown="dropdown" 
					:dropdownFull ="dropdownFull" 
					:search="search" 
				>
					<icon-ShopIcon v-show="icon" /> 
					<NavbarAuth />
				</test-navbar>
			</client-only> -->

			<Nuxt />  

			<post-Top />
		</main>    	
	</div> 	 
</template>

<script> 
export default {  
	data () {
		return {
			search: true, 
			icon: true,  
			logo: { 
				text: '4WAO',
				link: '/',  
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
					], 
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

<style lang="postcss">
</style>  