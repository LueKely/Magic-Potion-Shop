<template>
	<div class="about">
		<h1 @click="alertUser">This is an about page</h1>
		<p>gamer {{ props.joe }}</p>
		{{ props.mama }}
	</div>
</template>

<script setup>
	const props = defineProps({ joe: Number, mama: Number });
	const emit = defineEmits(['actionCaptured']);

	function alertUser() {
		emit('actionCaptured');
	}
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
