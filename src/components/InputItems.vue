<template>
	<!-- container -->
	<div class="card">
		<div v-if="!isEdit" class="card__preview--container component">
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

		<!-- edit component -->
		<div v-else class="card__preview--container component">
			<div class="card--image">
				<div class="form--item edit">
					<p class="card--p tag">Url:</p>

					<input
						class="form__input--text edit"
						type="text"
						placeholder="Input URL"
						v-model="copyItem.url"
					/>
				</div>
			</div>

			<div class="card--border__label edit">
				<p class="card--p tag">Name:</p>
				<input
					class="form__input--text edit label"
					type="text"
					placeholder="Name of Product"
					v-model="copyItem.label"
					maxlength="15"
				/>
			</div>

			<div class="card__info--container">
				<div class="card--info tag">
					<p class="card--p tag">Tag:</p>
					<select class="form--select edit" v-model="copyItem.tag">
						<option disabled value="">Please select one</option>
						<option>Dish Washing</option>
						<option>Laundry</option>
						<option>Misc</option>
					</select>
				</div>

				<div class="card--info price">
					<p class="card--p price">Price:</p>

					<input
						class="form__input--text edit"
						type="text"
						placeholder="Input price"
						v-model="copyItem.price"
					/>
				</div>
			</div>
			<!-- btn edit -->
			<div class="btn__container">
				<div>
					<button class="btn submit" @click="emitEdit" :disabled="checkForm">
						<div class="btn__overlay submit"></div>
						Submit
					</button>
				</div>
				<!-- btn cancel -->
				<div>
					<button class="btn delete" @click="makeFalse">
						<div class="btn__overlay delete"></div>
						<p class="btn__txt">Cancel</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card {
		margin: 20px 20px;
		height: 450px;
		width: 350px;
	}

	.card__preview--container.component {
		margin: 0px;
	}
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
		width: 110px;
		height: 40px;
		z-index: 3;

		top: -5%;
		left: -5%;
	}

	.btn.edit {
		margin-right: 5px;

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

		border-radius: 20px;
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

	.btn__overlay.delete:hover {
		transition: all 100ms ease-in-out;
		background-color: #bb6957db;
	}

	/* #9B9642 */

	.btn__overlay.submit {
		transition: all 100ms ease-in-out;
		background-color: #68652dc9;
	}
	.btn__overlay.submit:hover {
		transition: all 100ms ease-in-out;
		background-color: #9b9642;
	}
	.btn.submit {
		margin-left: 5px;

		overflow: hidden;
		position: relative;
		border-color: #56551f;
		color: #56551f;
		width: 90px;
		height: 30px;
	}

	.form--item.edit {
		margin: 0;
	}

	.form__input--text.edit {
		height: 26px;
		width: 200px;
	}

	.card--info {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card--info.tag {
		margin-top: 10px;
	}

	.card--p.price {
		color: #24130e;
		font-size: 1.4rem;
	}
	.form--select.edit {
		height: 35px;
	}
	.card--border__label.edit {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.form--item.edit {
		display: flex;
		align-items: center;
		justify-content: center;
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
		copyItem.value = { ...prop.item };
		isEdit.value = false;
	}
</script>
