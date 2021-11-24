<template>
	<div class="navbar-logo flex justify-between items-center">  
    <a :href="logo.link"
      class="logo inline-flex items-center 
        text-xl md:text-2xl font-bold uppercase tracking-wide"  
    >  
      <svg-Tailwind /> 
      {{ logo.text }} 
    </a> 
 
    <button class="hamberger lg:hidden 
      inline-flex items-center"
    > 
      <svg-Hamberger />
    </button>
	</div> 
</template>

<script> 
import {hamberger} from "~/plugins/hamberger.js"  
export default { 
  props: {logo: Object},
  mounted () {
	  hamberger(); 
	}, 
}
</script>