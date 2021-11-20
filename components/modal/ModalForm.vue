 <template>   
  <div class="modal-form"> 
    <div class="form-content center"> 
      <FormSignin />
      <FormSignup /> 
    </div>
  </div> 
</template>

<script>
import FormSignin from "~/components/modal/FormSignin.vue"; 
import FormSignup from "~/components/modal/FormSignup.vue"; 
import { modalForm } from "~/plugins/toggle";
export default { 
	components: {
    FormSignin, 
    FormSignup 
  }, 
  props: {}, 
  mounted () {  
    modalForm(); 
	} 
}
</script>

<style lang="postcss">   
.modal-form {@apply bg-black;}  
.form-signin, .form-signup {@apply hidden w-3/4  lg:w-2/5 border-2 rounded-lg shadow-lg border-gray-500
		py-4 px-4 lg:py-8 lg:px-8 space-y-6 text-base lg:text-lg;
	& .form-header { 
		& h2 {@apply text-center uppercase;}   
		& .close-modal {@apply flex justify-end cursor-pointer lg:-mt-6 text-4xl text-gray-400 hover:text-white;}
	} 
	& .form-fields {@apply space-y-6;
		& .field {@apply space-y-2 text-white;
			& input { @apply w-full py-2 lg:px-4 border-2 rounded border-gray-200} 			
			& span {@apply cursor-pointer text-base text-red-400 hover:text-white;}   
		} 
	}  
 	& button {@apply py-2 px-6 text-xl text-center text-white bg-blue-700;}  
	& .signin-btn {@apply flex justify-between items-center;
		& label {@apply cursor-pointer text-base text-red-500 hover:text-white;}  
	} 
}  
</style>