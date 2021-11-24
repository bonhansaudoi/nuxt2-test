<template>
  <div class="icon">
    <svg class="dropdown-btn w-8 h-8"  
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hide="true" 
    > 
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>   
    <div class="dropdown-content 
      hidden 
      lg:min-w-48 
      lg:absolute lg:origin-top-right lg:right-4 
      lg:mt-4 py-1  
      rounded-md shadow-md 
      ring-1 ring-black ring-opacity-5"
    > 
      <a href="#" @click="$emit('open-setting')"
        class="setting block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Settings
      </a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Sign out
      </a>
    </div> 
  </div> 
</template> 