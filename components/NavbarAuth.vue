<template> 
	<div class="navbar-auth flex item-center">  
		<div class="auth">  
			<div class="flex space-x-4 ml-2">  
				<icon-SigninIcon 
					@open-signin="isModal=true, isSignin=true"
					@open-password="isModal=true, isPassword=true"
			 	/> 
				 
				<icon-SignupIcon @open-signup="isModal=true, isSignup=true" />
			</div>
		</div>

		<div class="authed hidden">
			<div class="flex space-x-4 ml-2">  
				<authed-Bell @open-setting="isModal=true, isSetting=true"/>  
				<authed-User @open-profile="isModal=true, isProfile=true"/> 
			</div>	 
		</div> 
  <!--note fixed: modal center -->
		<div class="modal center bg-black" v-show="isModal" @click="closeModal"> 
			<form-SigninForm 
				v-show="isSignin" 
				@close-modal="isModal=false, isSignin=false" 
			/>  
			<form-SignupForm 
				v-show="isSignup" 
				@close-modal="isModal=false, isSignup=false" 
			/>
			<form-PasswordForm 
				v-show="isPassword" 
				@close-modal="isModal=false, isPassword=false" 
			/>   

			<authed-BellSetting
				v-show="isSetting"
				@close-modal="isModal=false, isSetting=false"  
			/>  
			<authed-UserProfile 
				v-show="isProfile" @click.stop
				@close-modal="isModal=false, isProfile=false" 
			/> 
		</div> 
	</div> 
</template>  

<script> 
export default { 
	data () {
		return {
			isModal: false,
			isSetting: false,
			isProfile: false,  

			isSignin: false,  
			isSignup: false,
			isPassword: false,
		} 
	},
	methods: { 
		closeModal () { 
			this.isModal = false; 
			this.isSetting = false,
			this.isProfile = false;

			this.isSignin = false;
			this.isSignup = false;
			this.isPassword = false;
		}
	}
} 
</script>  