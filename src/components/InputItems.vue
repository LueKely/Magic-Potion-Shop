<template>
	<!-- container -->
	<div>
		<!-- prop.item image -->
		<img :src="prop.item.url" :alt="prop.item.item" />
		<!--prop.item tag -->
		<div>
			<p>{{ prop.item.tag }}</p>
		</div>
		<!-- prop.item name -->
		<h2>{{ prop.item.label }}</h2>
		<!-- parseItem price -->
		<h3>
			{{ prop.item.price }}
		</h3>
	</div>
</template>
<script setup>
	const prop = defineProps({ item: Object, index: Number });
	console.log(prop.index);
</script>
