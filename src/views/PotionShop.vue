<script setup>
	import FormInput from '../components/FormInput.vue';
	import InputItems from '../components/InputItems.vue';
	import { ref, onMounted, computed, watch } from 'vue';
	import FilterItems from '../components/FilterItems.vue';

	const itemArray = ref([]);
	const userChoice = ref('create');
	const isEmpty = ref(localStorage.length == 0);
	const isArrEmpty = computed(() => {
		return itemArray.value.length;
	});
	const makeEmpty = ref(false);

	watch(isArrEmpty, () => {
		if (isArrEmpty.value == 0) {
			setTimeout(() => {
				makeEmpty.value = true;
			}, 300);
		} else {
			makeEmpty.value = false;
		}
	});

	function mountedEmpty() {
		if (isArrEmpty.value == 0) {
			makeEmpty.value = true;
		} else {
			makeEmpty.value = false;
		}
	}

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
		mountedEmpty();
	});
</script>

<template>
	<div class="selection__container">
		<button class="selection__item" @click="giveChoice('create')">
			Create
		</button>
		<button class="selection__item" @click="giveChoice('delete')">
			Delete/Edit
		</button>
		<button class="selection__item" @click="giveChoice('view')">
			View/Sort
		</button>
	</div>

	<div v-show="userChoice == 'create'">
		<FormInput @item-out="submitToStorage"></FormInput>
	</div>

	<!-- wrapper 1 -->
	<div v-show="userChoice == 'delete'">
		<!-- wrapper 2 -->

		<!-- wrapper 3 -->
		<div class="input--item__wrapper">
			<div class="form__border woodbrown"></div>
			<div class="title__margin"><h1>Delete/Edit</h1></div>

			<div class="input--item__item">
				<div class="empty__filter delete" v-if="makeEmpty">
					<h1>Tis Empty :(</h1>
				</div>
				<div v-else class="input--item__container">
					<transition-group name="list">
						<div
							v-for="(items, index) in itemArray"
							:key="items.id"
							class="input__items--wrapper"
						>
							<InputItems
								:item="items"
								:index="index"
								@edited-item="editItem"
								@index-item="deleteItem"
							></InputItems>
						</div>
					</transition-group>
				</div>
			</div>

			<div class="form__border woodbrown"></div>
		</div>
	</div>

	<div v-show="userChoice == 'view'">
		<FilterItems :items="itemArray"></FilterItems>
	</div>
</template>

<style>
	.input--item__item {
		min-height: 60vh;
		width: auto;
	}

	.input__items--wrapper {
		transition: all 100ms ease-in-out;
	}

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
	.empty__filter.delete {
		min-height: 60vh;
	}

	.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

	/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
	.list-leave-active {
		position: absolute;
	}

	.selection__container {
		width: 100%;
		padding: 20px;
		height: 100px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* 
	<div class="selection__container">
		<button class="selection__item" @click="giveChoice('create')">
			Create
		</button>
		<button class="selection__item" @click="giveChoice('delete')">
			Delete/Edit
		</button>
		<button class="selection__item" @click="giveChoice('view')">
			View/Sort
		</button>
	</div> */

	.selection__item {
		font-family: 'MedievalSharp', cursive;
		font-size: 3rem;
		border-style: none;
		margin-inline: 10px;
		padding: 5px 15px;
		border-radius: 30px;
		color: #2f1812;
	}
</style>
