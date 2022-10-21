<script setup>
	import { RouterLink, RouterView } from 'vue-router';

	// import PotionShop from './views/PotionShop.vue';
</script>

<template>
	<!-- <PotionShop></PotionShop> -->
	<div class="header">
		<div><h2>Potion Shop</h2></div>

		<nav>
			<RouterLink to="/">Home</RouterLink>

			<RouterLink to="/ShitPost">About</RouterLink>
		</nav>
	</div>

	<RouterView />
</template>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 25px;
		height: 110px;
		font-family: 'MedievalSharp', cursive;
		color: #2f1812;
		font-size: 2.5rem;
		opacity: 0.95;

		box-shadow: 0px -6px 15px 8px rgba(57, 29, 21, 1);
	}

	a {
		color: #2f1812;
		opacity: 0.95;
		font-size: 2rem;
		margin: 10px;
	}
</style>
