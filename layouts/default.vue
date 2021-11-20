<template>
	<div>  
	<!-- 	<div>  
			<ModalForm />   
			<ModalProfile />
		</div>
 -->
		<main>  
			<!-- <navbar 
				:logo="logo"  
				:menu ="menu"
				:search="search" 
			> 
				<NavbarAuth />
			</navbar> -->

			<Nuxt />  

			<post-top />
		</main>    	
	</div> 	
</template> 

<script>  
export default {  
    // data: () => ({}),  
}
</script> 

<style lang="postcss">
html {@apply text-gray-600;}  
/* body {@apply ;}   */
main {@apply min-h-screen ;}  
h1 { @apply text-red-500; } 
h2 { @apply text-blue-500; }
h3 { @apply text-green-500; }    
h4 { @apply text-indigo-500 text-lg uppercase; }  
</style>  