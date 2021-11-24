<template>
  <div>
    <div class="dropdown-full"
      v-for="item in dropdownFull" 
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
</template>

<script>  
export default {
	props: { 
		dropdownFull: Array, 
  } 
} 
</script> 