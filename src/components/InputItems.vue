<template>
	<!-- container -->
	<div>
		<div v-show="!isEdit">
			<!-- prop.item image -->
			<img :src="prop.item.url" :alt="prop.item.url" />
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
		<div v-if="isEdit">
			<textarea v-model="copyItem.url"></textarea>
			<textarea v-model="copyItem.tag"></textarea>
			<textarea v-model="copyItem.label"></textarea>
			<textarea v-model="copyItem.price"></textarea>
			<div>
				<button @click="emitEdit">Submit</button
				><button @click="makeFalse">cancel</button>
			</div>
		</div>

		<div v-show="!isEdit">
			<button @click="makeTrue">Edit</button>
		</div>

		<button @click="deleteItem">delete</button>
	</div>
</template>
<script setup>
	import { ref } from 'vue';
	const isEdit = ref(false);
	const prop = defineProps({ item: Object, index: Number });
	const emit = defineEmits(['edited-item', 'deleted-item']);
	const copyItem = ref({ ...prop.item });
	const index = ref(prop.index);

	function emitEdit() {
		emit('edited-item', copyItem.value);
		alert('your edit has been submitted');
	}

	function deleteItem() {
		emit('deleted-item', index.value);
		alert('item has now been deleted');
	}

	function makeTrue() {
		isEdit.value = true;
	}

	function makeFalse() {
		isEdit.value = false;
	}
</script>
