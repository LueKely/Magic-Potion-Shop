<script setup>
	import FormInput from './components/FormInput.vue';
	function test(e) {
		console.log(e.tag);
	}
</script>

<template>
	<h1>joe</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate.
		Earum animi recusandae corporis? Rem eligendi veritatis cum, officiis hic id
		quo earum. Minima omnis labore, sint dignissimos sunt quae.
	</p>
	<FormInput @item-out="test"></FormInput>
</template>

<style scoped></style>
