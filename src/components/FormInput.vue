<template>
	<div class="form__container">
		<div class="form__border"></div>

		<div class="form">
			<div class="form__create">
				<div class="form__item--title"><h1>Create</h1></div>
				<div class="form__item--container">
					<!-- Label -->
					<div class="form--item">
						<h1 class="form--label">Name:</h1>
						<input
							class="form__input--text"
							type="text"
							placeholder="Name of Product"
							v-model="item.options.label"
							maxlength="15"
						/>
						<div class="label--check">
							<p>{{ lableLength }}/15</p>
						</div>
					</div>

					<!-- Input Price -->
					<div class="form--item">
						<h1 class="form--label">Price:</h1>
						<input
							class="form__input--text"
							type="text"
							placeholder="Input Price"
							v-model="item.options.price"
						/>
						<div class="form--item__warning" v-show="checkReg">
							<p>Invalid Charaters, Please put numbers only.</p>
						</div>
					</div>
					<!-- Item URL Photo -->
					<div class="form--item">
						<h1 class="form--label">Photo Url:</h1>
						<input
							class="form__input--text"
							type="text"
							placeholder="Input URL"
							v-model="item.options.url"
						/>
					</div>
					<!-- tags -->
					<div class="form--item">
						<h1 class="form--label">Tag:</h1>
						<select class="form--select" v-model="item.options.tag">
							<option disabled value="">Please select one</option>
							<option>Dish Washing</option>
							<option>Laundry</option>
							<option>Misc</option>
						</select>
					</div>
					<!-- submit button -->
					<div class="form__button--container">
						<button
							class="btn form__button"
							@click="sendItem"
							:disabled="checkForm"
						>
							Submit
						</button>

						<span v-show="checkForm" class="btn__overlay"></span>
					</div>
				</div>
			</div>

			<div class="form__preview">
				<div class="preview--title"><h1>Preview</h1></div>
				<div class="card__preview--container">
					<div v-if="item.options.url == ''" class="card--image">
						<p class="card__image--placeholder">Image</p>
					</div>

					<div
						v-else
						class="card--image"
						:style="{ 'background-image': `url('${item.options.url}')` }"
					></div>

					<div v-if="item.options.label == ''" class="card--border__label">
						<h1>Product Name</h1>
					</div>
					<div v-else class="card--border__label">
						<h1>{{ item.options.label }}</h1>
					</div>

					<div class="card__info--container">
						<div class="card--info tag">
							<p class="card--p tag">Tag: {{ item.options.tag }}</p>
						</div>

						<div class="card--info price">
							<p class="card--p">Price: ₱{{ item.options.price }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="form__border"></div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';

	const checkForm = computed(() => {
		return (
			item.value.options.url == '' ||
			item.value.options.tag == '' ||
			item.value.options.label == '' ||
			item.value.options.price == '' ||
			reg.value.test(item.value.options.price)
		);
	});
	const checkReg = computed(() => {
		return reg.value.test(item.value.options.price);
	});

	const lableLength = computed(() => {
		return item.value.options.label.length;
	});

	const reg = ref(/[a-zA-Z]/g);
	const item = ref({ options: { url: '', tag: '', label: '', price: '' } });

	const emit = defineEmits(['item-out']);

	function sendItem() {
		console.log('item emetted');

		emit('item-out', item.value.options);
		item.value.options = { url: '', tag: '', label: '', price: '' };
	}
</script>

<style scoped>
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		padding: 20px;
	}

	.form__container {
		height: auto;
		width: auto;

		background-image: url('../assets/casual-background-image.webp');
		background-position: bottom;
		background-size: cover;
		background-repeat: no-repeat;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
	}
	.form__create {
		width: 410px;
		height: 600px;
		margin-right: 50px;
	}

	.form__preview {
		width: 410px;
		height: 600px;
		margin-left: 50px;
	}

	.form__item--title {
		text-align: center;
	}
	.form__border {
		height: 50px;
		width: 100%;

		background-image: url('../assets/wood-header-straight.webp');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.form--label {
		font-size: 2.5rem;
	}
	.form__item--container {
		width: 30vw;
		margin: auto;
	}
	.form__input--text {
		width: 400px;
		background-color: rgba(255, 0, 0, 0);

		border: none;
		border-bottom: solid 2px #391d15d4;

		font-family: 'Domine';
		font-size: 1.3rem;
		font-weight: bold;
		color: #391d15d4;
	}

	.label--check {
		width: 400px;
		text-align: end;
	}

	.form__input--text:focus {
		outline: none;
		background-color: #7d725c5e;
	}

	.form--item {
		height: 100px;
		width: 320px;
		margin-bottom: 15px;
	}

	.form--item__warning > p {
		font-size: 0.9rem;
		color: #ab4133;
		text-decoration: underline;
	}
	.form--select {
		width: 170px;
		height: 40px;

		background-image: url('../assets/paper-background-image.webp');
		border: solid 3px #98431fb5;

		padding: 5px;

		font-family: 'Domine', serif;
		font-weight: bolder;
		font-size: 1rem;
	}
	.form__button--container {
		overflow: hidden;
	}
	.btn {
		transition: scale 200ms ease-in-out;
		position: relative;
		font-size: 1.3rem;
		font-family: 'Domine', serif;
		font-weight: bolder;
		color: #391d15d4;
		border-radius: 0px;
		border: solid 3px#391d15d4;
		background-image: url('../assets/paper-background-image.webp');
	}

	.btn:active {
		transition: scale 200ms ease-in-out;
		scale: 0.95;
	}
	.btn__overlay {
		transition: background-color 200ms ease-in-out;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.5;
		display: inline-block;
		width: 87px;
		height: 30px;
	}

	button.btn:disabled + .btn__overlay {
		transition: background-color 200ms ease-in-out;
		background-color: #391d15d4;
	}

	/* card item */

	.card__preview--container {
		margin: auto;
		height: 450px;
		width: 350px;

		background-image: url('../assets/stone-background-image.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		border-radius: 35px;
		box-shadow: 0px 2px 55px 10px rgba(57, 29, 21, 1);
	}

	.preview--title {
		margin-bottom: 20px;
		text-align: center;
	}

	.card--border__label {
		width: 100%;
		height: 50px;
		background-image: url('../assets/stone-header-brown.webp');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.card--border__label > h1 {
		font-size: 2.3rem;
		text-align: center;
		color: #2f1812;
	}

	.card--image {
		width: 100%;
		height: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 35px 35px 0px 0px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card__image--placeholder {
		font-size: 4rem;
		font-family: 'MedievalSharp', cursive;
	}

	.card--info {
		width: 350px;
		height: 52px;

		padding-inline: 10px;
		text-align: center;
	}

	.card--info.tag {
		text-align: left;
	}

	.card--info.price {
		margin-top: 20px;
	}

	.card--p {
		color: #24130e;
		font-size: 1.8rem;
	}
	.card--p.tag {
		font-size: 1.6rem;
	}
</style>
