<template>
  <div> 
    <div class="inline-flex items-center space-x-2"> 
      <icon-CartIcon1 />  
      <icon-CartIcon2 /> 
    </div> 

    <div class="modal-icon hidden">
      <div class="modal-content bg-green-200"> 
        <modal-ContentCart1/>
        <modal-ContentCart2/> 
      </div>
    </div>
  </div>  
</template>

<script>
import { modal } from "~/plugins/modal";  
export default {
	mounted () {
	  modal(); 
	} 
}
</script> 

<style lang="postcss">  
</style> 