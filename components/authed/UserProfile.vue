<template>  
<div class="flex flex-col justify-center w-2/6" @click.stop > 
  <div class="">
    <span class="close" @click="$emit('close-modal')">&times;</span> 
    <h2 class="text-center uppercase">User-Profile</h2> 
    <div class="content card bg-white"></div>  
  </div>  
</div>
</template> 