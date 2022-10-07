<template>
	<div>
		<h1>View</h1>
		<p>Filter</p>
		<p>uhm please just use control f when looking for the item lol</p>

		<select v-model="userChoice">
			<option disabled value="">Please select one</option>
			<option>None</option>
			<option>Dish Washing</option>
			<option>Laundry</option>
			<option>Misc</option>
		</select>

		<div>Search result: {{ arrLength }}</div>

		<div v-if="!isNone">
			<p>{{ userChoice }}</p>
		</div>
	</div>

	<div v-if="isEmpty">
		<h1>Empty :(</h1>
	</div>

	<div v-else>
		<!-- <div v-if="arrLength">Search result: {{ filteredArray.value.length }}</div> -->
		<div v-for="item in filteredArray" :key="item.id">
			<img :src="item.url" :alt="item.url" />

			<div>
				<p>{{ item.tag }}</p>
			</div>

			<h2>{{ item.label }}</h2>

			<h3>
				{{ item.price }}
			</h3>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed, watch } from 'vue';
	const prop = defineProps({ items: Array });

	const userChoice = ref('');
	const isEmpty = computed(() => {
		return prop.items.length == 0;
	});
	const isNone = computed(() => {
		return userChoice.value == 'None';
	});
	const filteredArray = ref([]);
	const arrLength = computed(() => {
		return filteredArray.value.length;
	});
	console.log(arrLength.value);
	function noFilter() {
		filteredArray.value = [];
		prop.items.forEach((item) => {
			filteredArray.value.push(item);
		});
	}

	function filterArray(items, filter) {
		if (filter == 'None' || userChoice.value == '') {
			noFilter();
		} else {
			filteredArray.value = [];
			filteredArray.value = items.filter((item) => item.tag == filter);
			console.table(filteredArray);
		}
	}
	watch(userChoice, () => {
		filterArray(prop.items, userChoice.value);
	});
	watch(prop, () => {
		filterArray(prop.items, userChoice.value);
	});
</script>
