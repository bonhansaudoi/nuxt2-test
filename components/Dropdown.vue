<template>
  <div> 
    <div class="dropdown"
      v-for="item in dropdown"
      :key="item.text" 
    >  
      <button class="dropdown-btn  
        w-full inline-flex items-center 
        px-2 py-2 uppercase" 
      >
        {{ item.text }} 
        <svg-arrow-down></svg-arrow-down> 
      </button> 
 
      <div class="dropdown-content hidden
        lg:absolute lg:w-48 
        Tborder
        p-4 space-y-2 mt-1 lg:mt-3 text-base font-semibold"  
      >  
        <NuxtLink class="block"
          v-for="item in item.content"
          :key="item.text" 
          :to="item.link"  
        >  
          {{ item.text }}
        </NuxtLink>  
      </div>   
    </div> 
  </div> 
</template>

<script> 
import {dropdown} from "~/plugins/dropdown.js";  
export default {
	props: { 
		dropdown: Array, 
  },
  mounted () {
	  dropdown(); 
	} 
} 
</script> 