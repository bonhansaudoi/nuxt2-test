<template> 
	<div>  
		<h1>index</h1>
		<nuxt-link to="/test">test</nuxt-link>
	</div>
</template>

<script>
export default { 
	/* data () {
		return {  
		} 
	},  */
	head() {
		return {
			script: [
				{
					// src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
				}
			],
			link: [
				{
					// rel: 'stylesheet',
					// href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
				}
			]
		}
  }
}
</script> 

<style> 
/* .center img {
	animation: fadeIn 1s linear;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: scale(0);
	} 
	100% {
		opacity: 1;
		transform: scale(1);
	}
}

.greeting {
	animation: rotate 2s linear;
} 
@keyframes rotate {
	0% {
		opacity: 0;
		transform: rotateY(180deg);
	} 
	50% {
		opacity: 0.3;
		transform: rotateY(180deg);
	} 
	100% {
		opacity: 1;
	}
} */
</style>