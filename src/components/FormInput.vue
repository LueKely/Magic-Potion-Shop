<template>
	<h1>Create</h1>

	<!-- Label -->
	<div>
		<h1>Name</h1>
		<input
			type="text"
			placeholder="Name of Product"
			v-model="item.options.label"
		/>
	</div>

	<!-- Input Price -->
	<div>
		<h1>Price</h1>
		<input type="text" placeholder="Input Price" v-model="item.options.price" />
		<div v-show="checkReg">
			<p>Invalid Charaters Please only put numbers</p>
		</div>
	</div>
	<!-- Item URL Photo -->
	<div>
		<h1>Photo Url</h1>
		<input type="text" placeholder="Input URL" v-model="item.options.url" />
	</div>
	<!-- tags -->
	<div>
		<h1>Tag</h1>
		<select v-model="item.options.tag">
			<option disabled value="">Please select one</option>
			<option>Dish Washing</option>
			<option>Laundry</option>
			<option>Misc</option>
		</select>
	</div>
	<div>
		<button @click="sendItem" :disabled="checkForm">Submit</button>
	</div>

	<!-- image to be uploaded -->
	<div>
		<img :src="item.url" alt="" srcset="" />
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const checkForm = computed(() => {
		return (
			item.value.options.url == '' ||
			item.value.options.tag == '' ||
			item.value.options.label == '' ||
			item.value.options.price == '' ||
			reg.value.test(item.value.options.price)
		);
	});
	const checkReg = computed(() => {
		return reg.value.test(item.value.options.price);
	});

	const reg = ref(/[a-zA-Z]/g);
	const item = ref({ options: { url: '', tag: '', label: '', price: '' } });

	const emit = defineEmits(['item-out']);

	function sendItem() {
		console.log('item emetted');

		emit('item-out', item.value.options);
		item.value.options = { url: '', tag: '', label: '', price: '' };
	}
</script>

<style scoped></style>
