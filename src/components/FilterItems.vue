<template>
	<div class="input--item__wrapper">
		<div class="form__border brick"></div>
		<div class="title__margin"><h1>View/Filter</h1></div>
		<!-- view options -->

		<div class="filter">
			<div class="filter__container">
				<p>Filter: &nbsp;</p>

				<select v-model="userChoice" class="form--select">
					<option disabled value="">Please select one</option>
					<option>None</option>
					<option>Dish Washing</option>
					<option>Laundry</option>
					<option>Misc</option>
				</select>
			</div>
			<div class="search__result" v-if="!isNone">
				<p>Search results for {{ userChoice }} : {{ arrLength }}</p>
			</div>
		</div>

		<div class="empty__filter" v-if="isEmpty || arrLength == 0">
			<h1>Tis Empty :(</h1>
		</div>

		<!-- insert V for here -->
		<div v-else class="input--item__container">
			<div v-for="item in filteredArray" :key="item.id">
				<div class="card">
					<div class="card__preview--container component edit">
						<div
							class="card--image"
							:style="{ 'background-image': `url('${item.url}')` }"
						></div>

						<div class="card--border__label">
							<h1>{{ item.label }}</h1>
						</div>

						<div class="card__info--container">
							<div class="card--info tag">
								<p class="card--p tag">Tag: {{ item.tag }}</p>
							</div>

							<div class="card--info price">
								<p class="card--p">Price: ₱{{ item.price }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="form__border brick"></div>
	</div>
</template>

<style>
	.filter {
		margin-left: 30px;
		margin-bottom: 50px;
	}
	.filter__container {
		margin-top: 10px;
		display: flex;
	}

	.search__result {
		margin: 10px 0px 10px 0px;
	}
	.form__border.brick {
		background-image: url('../assets/stone-header-brown.webp');
	}

	.card__preview--container.component.edit {
		margin: 10px 20px;
	}
	.empty__filter {
		width: 100%;
		text-align: center;
		margin-bottom: 39vh;
		opacity: 0.7;
		user-select: none;
	}
</style>

<script setup>
	import { ref, computed, watch } from 'vue';
	const prop = defineProps({ items: Array });

	const userChoice = ref('');
	const isEmpty = computed(() => {
		return prop.items.length == 0;
	});
	const isNone = computed(() => {
		return userChoice.value == 'None' || userChoice.value == '';
	});
	const filteredArray = ref([]);
	const arrLength = computed(() => {
		return filteredArray.value.length;
	});
	console.log(arrLength.value);
	function noFilter() {
		filteredArray.value = [];
		prop.items.forEach((item) => {
			filteredArray.value.push(item);
		});
	}

	function filterArray(items, filter) {
		if (filter == 'None' || userChoice.value == '') {
			noFilter();
		} else {
			filteredArray.value = [];
			filteredArray.value = items.filter((item) => item.tag == filter);
			console.table(filteredArray);
		}
	}
	watch(userChoice, () => {
		filterArray(prop.items, userChoice.value);
	});
	watch(prop, () => {
		filterArray(prop.items, userChoice.value);
	});
</script>
