<script setup>
	import FormInput from './components/FormInput.vue';
	import InputItems from './components/InputItems.vue';
	import { ref } from 'vue';
	function submitToStorage(e) {
		localStorage.setItem(
			localStorage.length == 0 ? '1' : (localStorage.length + 1).toString(),
			JSON.stringify(e)
		);
		console.log(localStorage);
	}
	const apple = ref(localStorage.getItem('1'));
</script>

<template>
	<FormInput @item-out="submitToStorage"></FormInput>
	<InputItems :item="apple"></InputItems>
</template>

<style scoped></style>
