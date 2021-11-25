<template> 
  <button class="btn-cart ml-2 mb-4 lg:mb-0 mt-2 lg:mt-1"
    @click="$emit('open-cart')">   
    <svg-Cart />
  </button> 
</template>