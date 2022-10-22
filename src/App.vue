<script setup>
	import { RouterLink, RouterView } from 'vue-router';

	// import PotionShop from './views/PotionShop.vue';
</script>

<template>
	<!-- <PotionShop></PotionShop> -->
	<div class="header">
		<div><h2>Potion Shop</h2></div>

		<nav>
			<RouterLink to="/" class="line">Home</RouterLink>

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
		padding: 10px;

		border-radius: 30px;
		color: #2f1812;
		opacity: 0.95;
		font-size: 2rem;
		margin: 5px;
		transition: background-color 200ms ease-in-out;
	}

	a:hover {
		transition: background-color 200ms ease-in-out;
		background-color: #9a7d5bb6;
	}

	a.line::after {
		content: '';
		position: absolute;
		width: 2px;
		height: 56px;
		background-color: #2f1812d7;
		left: 107px;
		top: 0;
		border-radius: 5px;
	}
</style>
