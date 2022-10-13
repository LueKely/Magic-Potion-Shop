<template>
	<!-- container -->
	<div>
		<!-- <div v-if="!isEdit"> -->
		<!-- prop.item image -->
		<!-- <img :src="prop.item.url" /> -->
		<!--prop.item tag -->
		<!-- <div>
				<p>{{ prop.item.tag }}</p>
			</div> -->

		<!-- prop.item name -->
		<!-- <h2>{{ prop.item.label }}</h2> -->
		<!-- parseItem price -->
		<!-- <h3>
				{{ prop.item.price }}
			</h3>
		</div> -->

		<div v-if="!isEdit" class="card__preview--container">
			<div
				class="card--image"
				:style="{ 'background-image': `url('${prop.item.url}')` }"
			></div>

			<div class="card--border__label">
				<h1>{{ prop.item.label }}</h1>
			</div>

			<div class="card__info--container">
				<div class="card--info tag">
					<p class="card--p tag">Tag: {{ prop.item.tag }}</p>
				</div>

				<div class="card--info price">
					<p class="card--p">Price: ₱{{ prop.item.price }}</p>
				</div>
			</div>

			<div class="btn__container">
				<div>
					<button class="btn edit" @click="makeTrue">
						<div class="btn__overlay edit"></div>
						Edit
					</button>
				</div>

				<div>
					<button class="btn delete" @click="deleteItem">
						<div class="btn__overlay delete"></div>
						<p class="btn__txt">Delete</p>
					</button>
				</div>
			</div>
		</div>

		<div v-else>
			<textarea v-model="copyItem.url"></textarea>
			<div>
				<select v-model="copyItem.tag">
					<option disabled value="">Please select one</option>
					<option>Dish Washing</option>
					<option>Laundry</option>
					<option>Misc</option>
				</select>
			</div>
			<textarea v-model="copyItem.label"></textarea>
			<div v-if="reg.test(copyItem.price)">
				Invalide Input Please Use Numbers Only
			</div>
			<textarea v-model="copyItem.price"></textarea>
			<div>
				<button @click="emitEdit" :disabled="checkForm">Submit</button
				><button @click="makeFalse">cancel</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.btn__container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn__txt {
		z-index: 2;
		font-family: 'Domine', serif;
		font-size: 1.3rem;
	}

	.btn__overlay {
		position: absolute;
		width: 100px;
		height: 40px;
		z-index: 3;

		top: 0;
		left: 0;
	}

	.btn.edit {
		margin-right: 5px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		border-color: #9e6c23;
		color: #624416;
		width: 90px;
		height: 30px;
	}
	.btn__overlay.edit {
		transition: all 100ms ease-in-out;
		background-color: #c89548da;
	}

	.btn__overlay.edit:hover {
		transition: all 100ms ease-in-out;
		background-color: #ffbc57da;
	}

	.btn.delete {
		margin-left: 5px;

		border-radius: 10px;
		overflow: hidden;
		position: relative;
		border-color: #5e2916;
		color: #5e2916;
		width: 90px;
		height: 30px;
	}

	.btn__overlay.delete {
		transition: all 100ms ease-in-out;
		background-color: #854d40db;
	}

	.btn__overlay.delete:hover {
		transition: all 100ms ease-in-out;
		background-color: #bb6957db;
	}
</style>

<script setup>
	import { ref, computed } from 'vue';
	const isEdit = ref(false);
	const prop = defineProps({ item: Object, index: Number });
	const emit = defineEmits(['edited-item', 'index-item']);
	const copyItem = ref({ ...prop.item });
	const reg = ref(/[a-zA-Z]/g);

	const checkForm = computed(() => {
		return (
			copyItem.value.url == '' ||
			copyItem.value.tag == '' ||
			copyItem.value.label == '' ||
			copyItem.value.price == '' ||
			reg.value.test(copyItem.value.price)
		);
	});

	const index = ref(prop.index);

	function emitEdit() {
		emit('edited-item', { emitedItem: copyItem.value, index: index.value });

		isEdit.value = false;
	}

	function deleteItem() {
		emit('index-item', index.value);
	}

	function makeTrue() {
		isEdit.value = true;
	}

	function makeFalse() {
		isEdit.value = false;
		copyItem.value = { ...prop.item };
	}
</script>
