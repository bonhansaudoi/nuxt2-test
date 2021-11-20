<template>  
	<form class="form-signin" action="" method="post">
		<div class="form-header">
			<span class="close-modal">&times;</span> 
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
				<span>Forgot password?</span>
			</div>
		</div>

		<div class="signin-btn">
			<button type="submit">
				Login
			</button> 
			<label>
				<input type="checkbox" checked="checked" name="remember"> Remember me
			</label>
		</div>
	</form>
</template> 