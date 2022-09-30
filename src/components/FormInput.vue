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
		url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J8uktCRVET2arbFcH_PivwHaE6%26pid%3DApi&f=1&ipt=7dbd39003280857e217cc61d39c4a8421303c72ead7bfb45b505841dda7ad045&ipo=images',
	});

	const emit = defineEmits(['itemOut']);

	function sendItem() {
		emit();
	}
</script>

<style scoped></style>
