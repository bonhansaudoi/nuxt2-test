<template>   
  <div class="modal-profile
    absolute inset-0 lg:overflow-hidden
    hidden z-70"
  >   
    <div class="profile-content bg-red-100"> 
      <div class="user-profile">
        <div class="container-card bg-white">
          <div class="content">
            <h1>UserProfile</h1>
          </div> 
        </div> 
      </div> 
    </div>
  </div> 
</template>

<script> 
import { modalProfile } from "~/plugins/toggle";  

export default { 
	mounted () {   
		modalProfile();
	},
}
</script> 

<style lang="postcss"> 
.modal-profile {@apply bg-black;} 
</style> 