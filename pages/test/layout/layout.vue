<template>
  <div>  
    <div class="container-col">  
      <aside class="lg:w-1/6">
<!--  
        <Sidebar />  
  -->
      </aside>

      <div class="lg:w-5/6 lg:mx-8">
        <div class="content Tborder">
          <post-back /> 
          
          <h1>test</h1>

          <h2>Nuxt</h2> 
          <article>
            <h3>article</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.</p>

            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>  
              </li>
            </ul>

            <ol>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ol>

            <ul class="ul">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <a class="a" href="#">Lorem ipsum </a>
          </article>

          <h2>accordion</h2> 
          <post-V-accordion>
            <h3>Readmore</h3>	  
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
            </p> 
            <icon-ReadmoreIcon /> 

            <template v-slot:content>
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>  
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>  
              </article>
            </template> 
          </post-V-accordion>

          <post-V-accordion>
            <h3>Readmore</h3>	  
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
            </p> 
            <icon-ReadmoreIcon /> 

            <template v-slot:content>
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>  
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                </p>  
              </article>
            </template> 
          </post-V-accordion> 
        </div> 
      </div>  
    </div>  
  </div> 
</template>

<script>
// import {accordion} from "~/plugins/accordion";
export default {  
  layout: 'test', 
  mounted () {
    // accordion();
  },    	
}


     
	
</script>

<style lang="postcss">
/* .article { @apply space-y-4 md:space-y-6;} 
.accordion-btn { @apply cursor-pointer;} 
.accordion-content { @apply space-y-4 md:space-y-6;} */
.readmore { @apply text-red-500;} 
</style>  