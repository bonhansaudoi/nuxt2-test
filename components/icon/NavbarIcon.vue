<template>
  <div> 
    <div class="inline-flex items-center space-x-2"> 
      <icon-CartIcon1 />  
      <icon-CartIcon2 /> 
    </div> 
    <div class="modal-icon hidden">
      <div class="modal-content absolute inset-0 bg-green-200">
        <div class="container-card content-cart1 hidden lg:w-1/2 bg-yellow-400">  
          <span class="close">&times;</span> 
          <div class="content">
            <div class="header-modal"> 
              <h1>cart1</h1>
            </div>
          </div> 
        </div> 

        <div class="container-card content-cart2 hidden lg:w-1/2 bg-yellow-400">  
          <span class="close">&times;</span> 
          <div class="content">
            <div class="header-modal"> 
              <h1>cart2</h1>
            </div>
          </div>  
        </div> 
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

.modal-icon {@apply fixed inset-0 z-70 bg-black;}  
/* .modal-icon, .content-cart1, .content-cart2 {@apply hidden;}   */

</style> 