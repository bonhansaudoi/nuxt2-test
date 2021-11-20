<template> 
	<div class="navbar-auth flex space-x-6 item-center pl-2">  
		<div class="auth">  
			<div class="flex space-x-6 cursor-pointer"> 
				<span class="signin flex hover:text-white">  
					<svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
							clip-rule="evenodd">
						</path>
					</svg>
					LOGIN
				</span>

				<span class="signup flex hover:text-white">
					<svg class="h-5 w-5 mb-1 mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					REGISTER
				</span> 
			</div>
		</div>

		<div class="authed hidden">
			<div class="flex item-center space-x-6">
				<div class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						aria-hide="true"
						class="dropdown-btn 
							w-8 h-8 cursor-pointer"  
					> 
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>   
					<div class="dropdown-content 
						hidden 
						lg:min-w-48 
						lg:absolute lg:origin-top-right lg:right-4 
						lg:mt-4 py-1  
						rounded-md shadow-md 
						ring-1 ring-black ring-opacity-5"
					> 
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
								Settings
						</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
								Sign out
						</a>
					</div>
				</div>
 
				<div class="user">
					<img class="dropdown-btn 
						h-8 w-8 cursor-pointer rounded-full" 
						src="https://s5.gifyu.com/images/tiger-logo.png" alt="tiger"
					>
					<div class="dropdown-content
						hidden 
						lg:min-w-48 
						lg:absolute lg:origin-top-right lg:right-4 
						lg:mt-4 py-1  
						rounded-md shadow-md 
						ring-1 ring-black ring-opacity-5"
					>
						<a href="#" class="profile
							block px-4 py-2 
							text-sm text-gray-700 hover:bg-gray-100"
						>
							Profile
						</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Settings
						</a>
						<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Sign out
						</a>
					</div>
				</div>
			</div> 
		</div> 
	</div> 
</template> 

<script>  

export default {
	data () {
		return {}  
	},
	methods: {}  
}
</script> 

<style lang="postcss"> 
/* .icon {
	@apply mb-4 lg:mb-0 hover:text-white;
}	
. dropdown-content {@apply bg-white;}
 */
</style>    