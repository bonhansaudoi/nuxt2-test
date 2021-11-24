<template>
   <main>
<!---------------------------------------------------------------------->
<v-row justify="center">
   <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
         <h1>Create Posts</h1>

         <v-card-text>
            <!-- category -->
            <v-autocomplete  
               ref="category"
               v-model="category"
               :rules="[() => !!category || 'This field is required']"
               :items="categories"
               label="Category"
               required
            ></v-autocomplete>
            <!-- Category image -->
            <v-file-input label="Category-image"
               truncate-length="15"
            ></v-file-input>
            <!-- slug -->
            <v-text-field
               ref="slug"
               v-model="slug"
               :rules="[() => !!slug || 'This field is required']"
               label="Slug"
               required
            ></v-text-field>
            <v-text-field
               ref="title"
               v-model="title"
               :rules="[() => !!title || 'This field is required']"
               label="Title"
               required
            ></v-text-field>
            <v-text-field
               ref="author"
               v-model="author"
               :rules="[() => !!author || 'This field is required']"
               label="Author"
               required
            ></v-text-field>
            <!-- Post image -->
            <v-file-input label="Post-image"
               truncate-length="15"
            ></v-file-input>
            <!-- Content -->
            <v-text-field
               ref="description"
               v-model="description"
               :rules="[() => !!description || 'This field is required']"
               label="Description"
               required
            ></v-text-field>
             <v-text-field
               ref="content"
               v-model="content"
               :rules="[() => !!content || 'This field is required']"
               label="Content"
               required
            ></v-text-field>
            <!-- Date -->
            <v-text-field
               ref="date"
               v-model="date"     
               label="Date"    
            ></v-text-field>
         </v-card-text>

         <v-divider class="mt-12"></v-divider>

         <v-card-actions>
            <v-btn text> Cancel</v-btn>
   
            <v-spacer></v-spacer>

            <v-slide-x-reverse-transition>
               <v-tooltip
                  v-if="formHasErrors"
                  left
               >
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn
                     icon
                     class="my-0"
                     v-bind="attrs"
                     @click="resetForm"
                     v-on="on"
                     >
                     <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                  </template>
                  <span>Refresh form</span>
               </v-tooltip>
            </v-slide-x-reverse-transition>

            <v-btn
               color="primary"
               text
               @click="submit"
            >Submit</v-btn>
         </v-card-actions>
      </v-card>
   </v-col>
</v-row>
 

 
<!---------------------------------------------------------------------->
   </main>
</template>

<script>
export default {
   layout: 'empty',
   data: () => ({
      errorMessages: '',
      formHasErrors: false,

      slug: null,
      title: null,
      category: null,
      categories: ['Vue', 'Vuepress', 'Nuxt', 'Django','Laravel'],
      slug: null,  
      title: null, 
      author: '4Wao',
      
      // image: null,
      description: null,
      content: null,
      date: null
   }),
   computed: {
      form () {
         return {
            category: this.category,
            slug: this.slug,  
            title: this.title, 
            author: this.author,      
            description: this.description,
            content: this.content, 
            update: this.update
         }
      },
    },

   watch: {
      name () {
         this.errorMessages = ''
      },
   },

   methods: {
      resetForm () {
         this.errorMessages = []
         this.formHasErrors = false

         Object.keys(this.form).forEach(f => {
            this.$refs[f].reset()
         })
      },

      submit () {
         this.formHasErrors = false

         Object.keys(this.form).forEach(f => {
            if (!this.form[f]) this.formHasErrors = true

            this.$refs[f].validate(true)
         })
      },
   },
}
</script>