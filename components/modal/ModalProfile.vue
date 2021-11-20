<template>   
  <div class="modal-profile"> 
    <div class="profile-content"> 
      <div class="user-profile">
        <div class="container-card">
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

<style lang="postcss"></style>  