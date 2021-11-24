<template>
  <div class="icon"> 
     <!-- <img class="dropdown-btn 
      w-8 h-8 " src="https://s5.gifyu.com/images/tiger-logo.png" alt="tiger">  -->

    <svg class="dropdown-btn w-8 h-8" 
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>

    <div class="dropdown-content hidden 
      lg:min-w-48 
      lg:absolute lg:origin-top-right lg:right-4 
      lg:mt-4 py-1  
      rounded-md shadow-md 
      ring-1 ring-black ring-opacity-5"
    >  
      <a type="button" href="#" @click="$emit('open-profile')" class="profile
        block px-4 py-2 
        text-sm text-gray-700 hover:bg-gray-100">
        Profile
      </a>   
 
      <button href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Settings
      </button>
      <button href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        Sign out
      </button>
    </div>  
  </div>
</template>  

<style lang="postcss"></style>  