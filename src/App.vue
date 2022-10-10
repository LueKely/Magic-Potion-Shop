<script setup>
	import { RouterLink, RouterView } from 'vue-router';

	// import PotionShop from './views/PotionShop.vue';
</script>

<template>
	<!-- <PotionShop></PotionShop> -->
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/ShitPost">About</RouterLink>
	</nav>

	<RouterView />
</template>

<style scoped></style>
