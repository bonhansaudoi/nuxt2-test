<template>   
	<nav class="navbar
		w-full lg:flex px-4 py-2 lg:text-lg"
	>  
		<NavbarLogo :logo="logo" />

		<div class="navbar-menu hidden
			lg:flex lg:flex-grow lg:items-center 
			px-2 mt-4 lg:mt-0
			Tborder lg:border-none"
		> 
			<NavbarLink :menuLink="menuLink" />  

			<Dropdown :dropdown="dropdown" /> 
			<DropdownFull :dropdownFull="dropdownFull" /> 

			<div class="navbar-right
				lg:flex lg:items-center lg:ml-auto lg:space-x-4"
			> 
				<icon-Search v-show="search" />  

				<slot></slot>
			</div>  
		</div>
	</nav>    
</template> 

<script>  
export default {
	props: {
		logo: Object,  
		menuLink: Array,
		dropdown: Array,
		dropdownFull: Array,
		search: Boolean
  } 
}
</script> 

<style lang="postcss"> 
body {@apply lg:pt-24;}  
.navbar {@apply lg:fixed lg:top-0 uppercase text-gray-400 bg-black;}
.navbar-logo {@apply lg:mr-8; 
	& .logo { @apply text-orange-500 hover:text-green-500;
		& svg {@apply h-8 w-8 mr-2;}  
	}
	& .hamberger svg {@apply hover:text-green-500 focus:text-green-500;} 
} 
.navbar-menu {@apply pt-20 lg:p-0 pb-6;  
	& .navbar-link { 
		& a {@apply hover:text-white hover:bg-gray-900;} 
	}
	& .dropdown	{
		& .dropdown-btn {@apply hover:text-white hover:bg-gray-900;} 
		& .dropdown-content {@apply bg-indigo-200;} 
		& a {@apply hover:text-red-500 focus:text-red-500;}
	}  
	& .navbar-right {
		& .search {@apply top-20 left-8;} 
		& .cart {@apply hover:text-white;} 
		& .navbar-auth {
			& .authed {
				& .icon{@apply cursor-pointer text-yellow-600;}
			}  
			& .modal-form {@apply bg-black md:bg-red-100 lg:bg-black;}
			& .icon-auth {@apply hover:text-white;} 
			& .form-signin, & .form-signup {@apply w-3/4 md:w-2/5 px-4 pb-4 space-y-4 lg:space-y-6 text-base;
				& .form-header { 
					& h2 {@apply text-center uppercase;}   
				}
				& .form-fields {@apply space-y-4 lg:space-y-6;
					& .field {@apply space-y-2 text-white;
						& input { @apply w-full py-1 lg:py-2 lg:px-4 border-2 rounded border-gray-200} 			
					}
				}
				& .span {@apply cursor-pointer text-xs lg:text-sm text-red-400 hover:text-white;}  
				& button {@apply py-1 px-4 lg:py-2 lg:px-6 text-lg lg:text-xl text-center text-white bg-blue-700;}   
			} 	
		} 
	} 
}  
</style>  