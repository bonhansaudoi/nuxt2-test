<template> 
	<div class="navbar-auth flex item-center">  
		<div class="auth">  
			<div class="flex space-x-4 ml-2">  
				<icon-SigninIcon @open-signin="isModal=true, isSignin=true"/>  
				<icon-SignupIcon @open-signup="isModal=true, isSignup=true"/>
			</div>
		</div>

		<div class="authed hidden">
			<div class="flex space-x-4 ml-2">  
				<authed-BellIcon @open-setting="isModal=true, isSetting=true"/>  
				<authed-UserIcon @open-profile="isModal=true, isProfile=true"/> 
			</div>	 
		</div> 
  <!--note fixed: modal center -->
		<div class="v-modal center bg-black" v-show="isModal" @click="closeModal"> 	
			<modal-SigninForm  
				v-show="isSignin"  
				@close-modal="closeModal" 
				@open-password="isPassword=true, isSignin=false"
			/>  
			<modal-SignupForm 
				v-show="isSignup"  
				@close-modal="closeModal" 
			/>
			<modal-PasswordForm 
				v-show="isPassword" 
				@close-modal="closeModal" 
			/>   

			<authed-BellSetting
				v-show="isSetting"
				@close-modal="closeModal"  
			/>  
			<authed-UserProfile 
				v-show="isProfile" 
				@close-modal="closeModal" 
			/>  	
		</div>  
	</div> 
</template>  

<script> 
export default { 
	data () {
		return {
			isModal: false,
			isSignin: false,  
			isSignup: false,
			isPassword: false,

			isSetting: false,
			isProfile: false,  
		} 
	},
	methods: { 
		closeModal () { 
			this.isModal = false; 
			this.isSignin = false;
			this.isSignup = false;
			this.isPassword = false;

			this.isSetting = false,
			this.isProfile = false; 
		}
	}
} 
</script>  