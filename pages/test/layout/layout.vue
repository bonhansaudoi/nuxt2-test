<template>
  <div>  
    <div class="container-col lg:my-8">  
      <aside class="lg:w-1/6">
<!-- <client-only>
        <Sidebar />  
</client-only> -->
      </aside>

      <div class="lg:w-5/6 lg:mx-8 ">
        <div class="card"> 
          <div class="content">
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

            <h2>accordation</h2> 
            <article>
              <h3>readmore</h3>

              <div class="accordation">
                <div class="accordation-btn"> 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                  </p> 
                  <svg-readmore></svg-readmore>
                </div>   
                <div class="accordation-content hidden">
                
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
                </div>    
              </div>

              <div class="accordation">
                <div class="accordation-btn">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Perspiciatis rem assumenda, ea hic perferendis est voluptatem laudantium magni debitis, amet libero? Iure ipsam vero autem reiciendis incidunt soluta doloribus voluptatem.
                  </p> 
                  <svg-readmore></svg-readmore>
                </div>   
                <div class="accordation-content hidden "
                >
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
                </div>    
              </div> 
            </article>  
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import { accordation } from "~/plugins/toggle.js";
export default {  
  layout: 'test', 
  mounted () {
    accordation();
  },    	
}


     
	
</script>

<style lang="postcss">
/* .article { @apply space-y-4 md:space-y-6;} 
.accordation-btn { @apply cursor-pointer;} 
.accordation-content { @apply space-y-4 md:space-y-6;} */
.readmore { @apply text-red-500;} 
</style>  