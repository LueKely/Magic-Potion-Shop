<script setup>
	import FormInput from '../components/FormInput.vue';
	import InputItems from '../components/InputItems.vue';
	import { ref, onMounted } from 'vue';
	import FilterItems from '../components/FilterItems.vue';

	const itemArray = ref([]);
	const userChoice = ref('create');
	const isEmpty = ref(localStorage.length == 0);

	function giveChoice(word) {
		userChoice.value = word;
		console.log(userChoice.value);
	}

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
			console.table(itemArray.value);
			console.table(localStorage);
		} else {
			console.log('empty');
			itemArray.value = [];
		}
	}

	function pushAll() {
		itemArray.value = [];
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

	function rewrite() {
		for (let index = 0; index < itemArray.value.length; index++) {
			localStorage.setItem(
				(index + 1).toString(),
				JSON.stringify(itemArray.value[index])
			);
		}
	}

	function deleteItem(e) {
		itemArray.value.splice(e, 1);
		localStorage.clear();
		rewrite();
		console.table(localStorage);
	}

	onMounted(() => {
		check();
	});
</script>

<template>
	<div><h1>Potion Shop Listing And Making</h1></div>

	<div>
		<button @click="giveChoice('create')">Create</button>
		<button @click="giveChoice('delete')">Delete/Edit</button>
		<button @click="giveChoice('view')">View/Sort</button>
	</div>

	<div v-show="userChoice == 'create'">
		<FormInput @item-out="submitToStorage"></FormInput>
	</div>

	<!-- wrapper 1 -->
	<div v-show="userChoice == 'delete'">
		<!-- wrapper 2 -->
		<div v-if="itemArray.length == 0">Empty :(</div>
		<!-- wrapper 3 -->
		<div class="input--item__wrapper" v-else>
			<div class="form__border woodbrown"></div>
			<div class="title__margin"><h1>Delete/Edit</h1></div>

			<div class="input--item__container">
				<InputItems
					v-for="(items, index) in itemArray"
					:key="items.id"
					:item="items"
					:index="index"
					@edited-item="editItem"
					@index-item="deleteItem"
				></InputItems>
			</div>
			<div class="form__border woodbrown"></div>
		</div>
	</div>

	<div v-show="userChoice == 'view'">
		<FilterItems :items="itemArray"></FilterItems>
	</div>
</template>

<style>
	.title__margin {
		margin-left: 20px;
	}
	.form__border.woodbrown {
		background-image: url('../assets/wood-header-textured.webp');
	}
	.input--item__container {
		padding: 10px 30px 30px 30px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		width: 88%;
		height: auto;
	}
	.input--item__wrapper {
		background-image: url('../assets/casual-background-image.webp');
		width: 100%;
		height: auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
