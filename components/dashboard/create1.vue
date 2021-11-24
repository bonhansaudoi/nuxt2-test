<template>
   <v-card oulined class="pa-5 mx-auto" >
<!---------------------------------------------->
      <Form 
         @emit="create"
         :titleForm="titleForm" 
         :nameButton="nameButton"
         :color="color"
         :error="error" 
      > 
         <Select :lable="lable.category" />
         <Image :lable="lable.categoryImage"/>
         <TextField :lable="lable.title" />
         <TextField :lable="lable.slug" />>
         <TextField :lable="lable.author" />
         <Image :lable="lable.postImage"/>
         <TextField :lable="lable.sub" />
         <TextField :lable="lable.description" />

      </Form>
<!---------------------------------------------->   
   </v-card>  
</template>

<script>
export default {
   layout: 'empty',
  
   data: () => ({
      titleForm: 'create article', 
      nameButton: 'submit', 
      color: "success",
      error: '',
      lable: {
         category: 'Category',
         title: 'Title',
         slug: 'Slug',
         sub: 'Sub',
         description: 'Description',
         author: 'Author',
         categoryImage: 'Category image',
         postImage: 'Post image', 
      }  
   }),

   computed: { 
      category () {
         return this.$store.state.form.formInfo.email 
      },
      title () {
         return this.$store.state.form.formInfo.password 
      }
   },

   methods: {
      async create () {
         let article = {
            category: this.category,
            title: this.title,
            slug: this.slug,
            author: this.author,
            subDescription: this.subDescription,
            description: this.description
         }

         try {
            await this.$store.dispatch('article/createArticle', article)  
            // this.$router.push("/dashboard")   
         }
         catch { 
            this.error = "Fuck you."
         } 
      }
   } 
}
</script> 