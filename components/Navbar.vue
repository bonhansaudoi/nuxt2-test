<template>   
	<nav class="navbar 
	 	relative w-full
		lg:flex px-4 py-4 lg:py-2
		uppercase lg:text-lg"
	>  
		<div class="navbar-logo flex justify-between items-center">  
			<a :href="logo.link"
				class="logo inline-flex items-center 
					text-2xl font-bold uppercase tracking-wide"  
			> 
				<svg class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
				</svg> 
				{{ logo.text }} 
			</a> 
			<button class="hamberger lg:hidden
				inline-flex items-center"
			>
				<svg class="block h-8 w-8 text-gray-500 font-bold" xmlns="http://www.w3.org/2000/svg"
					fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hide="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div> 

		<div class="navbar-menu hidden 
			lg:flex lg:flex-row lg:flex-grow
			lg:justify-between lg:items-center 
 			px-4 pt-16 pb-4 lg:p-0 mt-4 lg:mt-0
			Tborder lg:border-none"
		>    
			<div class="navbar-link   
				flex flex-col lg:flex-row lg:items-center" 
				v-for="item in menu"
        :key="item.text" 
			>   
				<NuxtLink class="px-2 py-2 lg:px-4"
					v-for="item in item.navbarLink"
					:key="item.text"
					:to="item.link"   
				>
					{{ item.text }}
				</NuxtLink> 
 
			 	<div class="dropdown" 
					v-for="item in item.dropdown" 
					:key="item.text" 
				>   
					<button class="dropdown-btn  
						w-full inline-flex items-center 
						px-2 py-2 uppercase" 
					>
						{{ item.text }} 
						<svg-arrow-down></svg-arrow-down> 
					</button> 
					<div class="dropdown-content 
						hidden lg:absolute lg:w-48 
						Tborder
						p-4 space-y-2 mt-1 lg:mt-3 text-base font-semibold" 
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
 				
				 <div class="dropdown-full"
					v-for="item in item.dropdownFull" 
					:key="item.text" 
				>
						<button class="dropdown-btn
							w-full inline-flex items-center 
							px-2 py-2 uppercase"  
						> 
							{{ item.text }} 
							<svg-arrow-down></svg-arrow-down>  
						</button>

						<div class="dropdown-content 
							hidden lg:absolute 
							lg:left-2 lg:right-2
							mt-1 lg:mt-4 p-2   
							text-base font-semibold
							Tborder"  
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
 			</div>  

			<div class="navbar-right
				lg:flex lg:items-center lg:ml-auto  
				lg:space-x-6 mt-2 lg:mt-0"
			>  
				<Search v-if="search" />
				
				<slot></slot> 
			</div> 
		</div> 
	</nav>    
</template> 

<script> 
import { hamberger, dropdown, accordation } from "~/plugins/toggle.js";
export default {
	props: {
		logo: Object,  
		menu: Array,
		search: Boolean
  },
  mounted () {
		hamberger(); 
		dropdown();
		accordation(); 
	} 
}
</script> 

<style lang="postcss"> 
.navbar {@apply text-gray-400 bg-black;
	& .navbar-logo {@apply lg:mr-8; 
		& .logo { @apply text-orange-500 hover:text-green-500;
			& svg {@apply h-8 w-8 mr-2;}  
		}
		& .hamberger svg {@apply hover:text-green-500 focus:text-green-500;} 
	}	
	& .navbar-menu { 
		& .navbar-link { 
			& a, & .dropdown-btn {@apply hover:text-white hover:bg-gray-900;} 
			& .dropdown-content, & .dropdown-content {@apply bg-indigo-200; 
				& a {@apply bg-transparent hover:text-red-500 focus:text-red-500;}
			}  
		}
		& .navbar-right {
			& .search {@apply top-20 left-10;} 
			& .authed {
				& .icon{@apply text-yellow-600;}
			} 
		}
	} 
}  
</style>  