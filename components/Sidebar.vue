<template>  
	<nav class="nav-side 
		flex flex-col
		card px-2 py-2
		uppercase lg:text-base"  
	> 
		<NuxtLink 
			v-for="item in links"
			:key="item.text" 
			:to="item.link"        
			class="px-2 py-2 text-gray-400"
		> 
			{{ item.text }}
		</NuxtLink>   

		<div class="sidebar relative"
				v-for="item in dropdown" 
				:key="item.text" 
			>   
				<button class="sidebar-btn  
					w-full inline-flex items-center p-2
					text-left uppercase	text-gray-400"  
				>
					{{ item.text }} 
					<svg-arrow-down></svg-arrow-down>
				</button> 

				<div class="sidebar-content hidden  
					w-full 
					border rounded-md shadow-md border-gray-500
					p-4 space-y-2 mt-1 text-base font-semibold"  
				>  
					<NuxtLink  
						v-for="item in item.content"
						:key="item.text" 
						:to="item.link" 
						class="block"
					> 
						{{ item.text }}
					</NuxtLink>  
				</div>  
		</div> 
 	</nav>	
</template>

<script>
import {sidebar} from "~/plugins/sidebar.js"; 
export default { 
	props: {
		links: Array,
		dropdown: Array 
  },
	mounted () {
	  sidebar(); 
	}, 
}
</script> 
 
<style lang="postcss" scoped> 
.nav-side {@apply bg-black; 
	& a, & .sidebar-btn {@apply hover:text-white hover:bg-gray-900 focus:text-green-500;}
	& .sidebar-content {
		@apply bg-indigo-200; 
		& a {@apply bg-transparent hover:text-red-500 focus:text-red-500;}
	}  
}   
</style>