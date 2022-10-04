<script setup>
	import FormInput from './components/FormInput.vue';
	import InputItems from './components/InputItems.vue';
	import { ref, onMounted, watch } from 'vue';

	const itemArray = ref([]);

	const isEmpty = ref(localStorage.length == 0);

	function pushArray(e) {
		itemArray.value.push(e);
	}

	function submitToStorage(e) {
		localStorage.setItem(
			localStorage.length == 0 ? '1' : (localStorage.length + 1).toString(),
			JSON.stringify(e)
		);
		pushArray(e);
	}

	function check() {
		if (!isEmpty.value) {
			pushAll();
			console.log('not empty');
			console.log(itemArray.value);
			console.log(localStorage);
		} else {
			console.log('empty');
			itemArray.value = [];
		}
	}

	function pushAll() {
		for (let index = 0; index < localStorage.length; index++) {
			pushArray(JSON.parse(localStorage.getItem((index + 1).toString())));
		}
	}

	function editItem(e) {
		localStorage.setItem(
			(e.index + 1).toString(),
			JSON.stringify(e.emitedItem)
		);
		itemArray.value.splice(e.index, 1, e.emitedItem);
	}

	function deleteItem(e) {
		console.log('deleting index ' + e);
		console.log(localStorage.key(e));
		localStorage.removeItem(localStorage.key(e - 1));
		itemArray.value.splice(e, 1);
		console.table(localStorage);
	}
	watch(itemArray.value, () => {
		console.log('array changed');
		isEmpty.value = localStorage.length == 0;
	});
	onMounted(() => {
		check();
	});
</script>

<template>
	<FormInput @item-out="submitToStorage"></FormInput>

	<!-- wrapper -->

	<div v-show="isEmpty">Empty :(</div>

	<InputItems
		v-for="(items, index) in itemArray"
		:key="items.id"
		:item="items"
		:index="index"
		@edited-item="editItem"
		@index-item="deleteItem"
	></InputItems>
</template>

<style scoped></style>
