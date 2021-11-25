<template>  
  <form class="form-signup Tborder" action="" method="post">
    <div class="form-header">
      <span class="close" @click="$emit('close-modal')">&times;</span> 
      <h2> reset Password </h2>
    </div>

    <div class="form-fields">
      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" required>            
      </div>

      <div class="field">
        <label for="psw">Password</label>
        <input type="password" name="psw" placeholder="Password" required>
      </div>

      <div class="field">
        <label for="psw">Confirm Password</label>
        <input type="password" name="psw" placeholder="Password" required>
      </div>
    </div>

    <button type="submit" class="w-full">
      SUBMIT
    </button> 
  </form> 
</template> 