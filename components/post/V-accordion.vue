<template>
	<div> 
		<div class="accordion-btn cursor-pointer space-y-4"
			@click="accordion" 
		>
			<slot></slot>
		</div>

		<div class="accordion-content hidden" ref="content">
			<slot name="content"></slot> 
		</div>
	</div> 
</template>

<script> 
export default {
	methods: {
		accordion () { 
			var c = document.getElementsByClassName("accordion-content");
			var i;

			function hideContent() {
				for (i = 0; i < c.length; i++) {
					c[i].classList.add("hidden");
				} 
			}
          
			if (!this.$refs.content.classList.contains("hidden")) {
				this.$refs.content.classList.add("hidden");
			}
			else {
				hideContent();
				this.$refs.content.classList.toggle("hidden");
			} 
		}
	} 
}
</script>  