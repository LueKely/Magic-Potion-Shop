<script setup>
	import NotificationHandler from '../components/Notification-Handler.vue';
</script>
<template>
	<h1>BUY MY FUCKING POTIONS YOU DIP</h1>
	<div>
		<div>
			<teleport to="#notify">
				<div class="modalContainer">
					<NotificationHandler
						word="Item Added!"
						is="add"
					></NotificationHandler>
				</div>
			</teleport>
		</div>

		<!-- <NotificationHandler word="Item Deleted!" is="del"></NotificationHandler>
		<NotificationHandler word="Item Edited!" is="edited"></NotificationHandler> -->
	</div>
</template>
<style>
	.modalContainer {
		position: absolute;
		top: 85vh;
		left: 75vw;
	}
</style>
