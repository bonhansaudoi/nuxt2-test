<template> 
	<button type="button" @click="back"
		class="lg:text-lg uppercase font-semi-bold 
			text-gray-500 hover:text-gray-700"
		>
		<svg-Back /> 
		Back
	</button>
</template>

<script>
export default {
	methods: {
		back () {
			//this.$router.go(-1);
			this.$router.back()
		},
	}
}
</script>