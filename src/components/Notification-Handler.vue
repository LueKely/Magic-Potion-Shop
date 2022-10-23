<script setup>
	const prop = defineProps(['word', 'is']);
</script>
<template>
	<div
		class="notification__container"
		:class="{
			add: prop.is == 'add',
			del: prop.is == 'del',
			edited: prop.is == 'edited',
		}"
	>
		<div
			class="notification__item"
			:class="{
				add: prop.is == 'add',
				del: prop.is == 'del',
				edited: prop.is == 'edited',
			}"
		>
			<p
				:class="{
					add: prop.is == 'add',
					del: prop.is == 'del',
					edited: prop.is == 'edited',
				}"
			>
				{{ prop.word }}
			</p>
		</div>
	</div>
</template>

<style scoped>
	.notification__container {
		overflow: hidden;
		margin: auto;
		background-image: url('../assets/casual-background-image.webp');

		border-radius: 15px;

		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100px;
		width: 400px;

		border: 5px solid;
	}
	.notification__item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: inherit;
		height: inherit;
		text-align: center;
		border-radius: 15px;
	}

	.notification__container.add {
		border-color: #56551f;
	}
	p.add {
		color: #56551f;
	}
	.notification__item.add {
		background-color: #97934170;
	}

	.notification__container.del {
		border-color: #5e2916;
	}
	p.del {
		color: #5e2916;
	}
	.notification__item.del {
		background-color: #854d4052;
	}

	.notification__container.edited {
		border-color: #9e6c23;
	}
	p.edited {
		color: #624416;
	}
	.notification__item.edited {
		background-color: #c8954866;
	}
</style>
