<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>gamer {{ props.joe }}</p>
		{{ props.mama }}
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const props = defineProps({ joe: Number, mama: Number });
	const emit = defineEmits(['actionCaptured']);
	const lue = ref(5);
	emit('actionCaptured', lue.value);
</script>

<style>
	@media (min-width: 1024px) {
		.about {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	}
</style>
