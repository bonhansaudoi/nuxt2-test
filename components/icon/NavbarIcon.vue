<template>
  <div> 
    <div class="inline-flex items-center space-x-2"> 
      <icon-CartIcon1 @open-cart1="cart1"/>  
      <icon-CartIcon2 @open-cart2="cart2"/> 
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
	},
  methods: { 
    cart1() {
      var modal = document.querySelector(".modal-icon");
      var cart1 = document.querySelector(".content-cart1");
      modal.style.display = "block";
      cart1.style.display = "block";
    },
    cart2 () {
      var modal = document.querySelector(".modal-icon");
      var cart2 = document.querySelector(".content-cart2");
      modal.style.display = "block";
      cart2.style.display = "block";
    } 
  }
}
</script> 