<template> 
  <div>  
    <button @click="modal=!modal"
      class="cart ml-2 mb-4 lg:mb-0 mt-2 lg:mt-1" 
    >  
      <svg-Cart />
    </button>
 
    <div class="modal bg-gray-300" v-show="modal"> 
      <div class="container-card lg:w-1/2"> 
        <span class="close" @click="modal=false">&times;</span> 
        <div class="content">
          <div class="header-modal">
            
            <h1>cart</h1>
          </div>
        </div> 
      </div>  
    </div> 
  </div>       
</template> 

<script> 
export default {
  data () {
		return {
      modal: false
    }  
  }  
}   
</script> 