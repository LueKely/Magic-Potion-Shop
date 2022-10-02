<script setup>
	import FormInput from './components/FormInput.vue';
	import InputItems from './components/InputItems.vue';
	import { ref, onMounted } from 'vue';

	const itemArray = ref([]);

	const isEmpty = localStorage.length == 0;

	function pushArray(e) {
		itemArray.value.push(e);
	}

	function submitToStorage(e) {
		localStorage.setItem(
			localStorage.length == 0 ? '1' : (localStorage.length + 1).toString(),
			JSON.stringify(e)
		);
		pushArray(e);
		console.log(localStorage);
	}

	function check() {
		if (isEmpty) {
			pushAll();
		} else {
			itemArray.value = [];
		}
	}

	function pushAll() {
		for (let index = 0; index < localStorage.length; index++) {
			pushArray(JSON.parse(localStorage.getItem((index + 1).toString())));
		}
	}

	onMounted(() => {
		check();
	});
</script>

<template>
	<FormInput @item-out="submitToStorage"></FormInput>

	<InputItems v-if="!isEmpty" :item="prop"></InputItems>
</template>

<style scoped></style>
