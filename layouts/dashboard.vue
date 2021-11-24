<template> 
  <div>
    <main>  
      <client-only> 
        <test-navbar  
          :logo="logo"  
          :menu ="menu"
          :search="search" 
        >  
        </test-navbar > 
      </client-only> 

      <Nuxt />   
    </main> 
  </div>
</template> 

<script> 
export default { 
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