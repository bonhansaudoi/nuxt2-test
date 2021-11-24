<template>
  <div class="lg:flex"> 
    <!-- Note <div class="lg:flex"> or loop menu -->
    <div class="navbar-link flex flex-col lg:flex-row lg:justify-between lg:items-center" 
      v-for="item in menuLink" 
      :key="item.text" 
    > 
      <NuxtLink class="px-2 py-2 lg:px-4"
        v-for="item in item.navbarLink"
        :key="item.text"
        :to="item.link"   
      >
        {{ item.text }}
      </NuxtLink> 

      <a class="px-2 py-2 lg:px-4" target="_blank" 
				v-for="item in item.externalLink"
        :key="item.text"
        :href="item.link"   
      >
        {{ item.text }} 
			</a>   
    </div>   
  </div>     
</template> 

<script>  
export default { 
	props: { 
		menuLink: Array, 
  }
}
</script> 