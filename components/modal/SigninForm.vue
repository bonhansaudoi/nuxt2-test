<template>  
	<form class="v-form-signin Tborder" action="" method="post" @click.stop>
		<div class="form-header">
			<span class="v-close" @click="$emit('close-modal')">&times;</span> 
			<h2>Login</h2>
		</div>

		<div class="form-fields">
			<div class="field">
				<label for="email">Email</label>
				<input type="email" name="email" placeholder="Email" required>            
			</div>

			<div class="field">
				<label for="psw">Password</label>
				<input type="password" name="psw" placeholder="Password" required>
				<span class="span" @click="$emit('open-password')">Forgot password?</span>
			</div>
		</div>

		<div class="flex justify-between items-center">
			<button type="submit">
				Login
			</button> 
			<label class="span">
				<input type="checkbox" checked="checked" name="remember"> Remember me
			</label>
		</div>
	</form> 
</template> 