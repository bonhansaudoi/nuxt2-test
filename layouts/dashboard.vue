<template> 
  <main>  
    <client-only> 
      <navbar 
        :logo="logo"  
        :menu ="menu"
        :search="search" 
      >  
      </navbar> 
    </client-only> 

    <Nuxt />   
  </main> 
</template> 

<script> 
export default {
  layout: 'dashboard', 
  middleware: [], 
  data: () => ({
    search: true, 
    logo: { 
      text: 'dashboard',
      link: '/test/dashboard/',  
    },
    menu: [
			{
        navbarLink: [         
          {
            text: "home",
            link: "/"
          }, 
          {
            text: "test",
            link: "/test"
          } 
        ] 
      }
    ]      
  }), 
  created () {},  
  computed: {} 
}
</script>  

<style lang="postcss" scoped> 
</style>   