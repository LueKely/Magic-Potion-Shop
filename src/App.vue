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
		console.log(itemArray.value);
	}

	function check() {
		if (!isEmpty) {
			pushAll();
			console.log('not empty!!');
			console.log(itemArray.value);
			console.log(localStorage);
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

	<!-- wrapper -->
	<div v-if="!isEmpty">
		<InputItems
			v-for="(items, index) in itemArray"
			:key="items"
			:item="items"
			:index="index"
		></InputItems>
	</div>
</template>

<style scoped></style>
