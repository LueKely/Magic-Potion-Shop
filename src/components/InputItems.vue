<template>
	<h1>{{ prop.item }}</h1>
</template>
<script setup>
	import { reactive } from 'vue';

	const prop = defineProps({ item: String });

	const parseItem = reactive(JSON.parse(prop.item));

	console.log(parseItem.tag);
</script>
