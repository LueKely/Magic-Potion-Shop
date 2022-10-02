<template>
	<!-- parseItem image -->
	<img :src="parseItem.url" :alt="parseItem.item" />
	<!--parseItem tag -->
	<div>
		<p>{{ parseItem.tag }}</p>
	</div>
	<!-- parseItem name -->
	<h2>{{ parseItem.label }}</h2>
	<!-- parseItem price -->
	<h3>
		{{ parseItem.price }}
	</h3>
</template>
<script setup>
	import { reactive } from 'vue';

	const prop = defineProps({ item: String });

	const parseItem = reactive(JSON.parse(prop.item));
</script>
