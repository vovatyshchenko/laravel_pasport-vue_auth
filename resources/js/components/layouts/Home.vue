<template>
	<v-row align="center" justify="center">
		<v-col class="text-center">
			<h1>HOME PAGE</h1>
			<p>{{ user_info }}</p>
		</v-col>
	</v-row>
</template>

<script>
export default {
	computed: {
    	user_info() {
			return this.$store.getters.user_info;
		}
	},
}
</script>
