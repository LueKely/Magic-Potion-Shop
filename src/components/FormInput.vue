<template>
	<h1>test</h1>

	<!-- Label -->
	<div>
		<h1>Name</h1>
		<input type="text" placeholder="Name of Product" v-model="item.label" />
	</div>

	<!-- Input Price -->
	<div>
		<h1>Price</h1>
		<input type="text" placeholder="Input Price" v-model="item.price" />
	</div>
	<!-- Item URL Photo -->
	<div>
		<h1>Photo Url</h1>
		<input type="text" placeholder="Input URL" v-model="item.url" />
	</div>
	<!-- tags -->
	<div>
		<h1>Tag</h1>
		<select v-model="item.tag">
			<option disabled value="">Please select one</option>
			<option>Dish Washing</option>
			<option>Laundry</option>
			<option>Misc</option>
		</select>
	</div>
	<div>
		<button @click="sendItem">Submit</button>
	</div>

	<!-- image to be uploaded -->
	<div>
		<img :src="item.url" alt="" srcset="" />
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	const item = reactive({
		label: '',
		price: '',
		tag: '',
		url: '',
	});

	const emit = defineEmits(['item-out']);

	function sendItem() {
		console.log('item emetted');
		console.log(item);
		emit('item-out', item);
	}
</script>

<style scoped></style>
