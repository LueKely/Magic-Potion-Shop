<script setup></script>
<template>
	<div class="blog__container">
		<div class="form__border woodbrown"></div>

		<div class="blog__item">
			<h1>BUY MY POTIONS</h1>

			<div class="blog__item--content">
				<p>
					Welcome to the potion shop this is where you store all of the listing
					of your potions. The purpose of this website is to store the name,
					image and price of what you sell in your tindahan locally, so
					basically a shitty excel sheet.But mostly I made this for the sake of
					learning vue. I have nothing more to say than this is the potion shop,
					buy my potions.
				</p>
				<div class="explain">
					<p>
						The style was based on the game and the website of
						<a class="git" href="https://www.potioncraft.com/">Potion Craft</a>
						go check it out, it's a good game. And most of the assets I used
						where from there.
					</p>
				</div>
			</div>
			<div class="blog__link">
				<p>No mobile view tamad na ko >:(.</p>
				<p>
					click
					<a
						href="https://github.com/LueKely/Magic-Potion-Shop"
						class="git"
						target="_blank"
						>here</a
					>
					for the repo
				</p>
			</div>
		</div>
		<div class="form__border woodbrown"></div>
	</div>
</template>
<style>
	.modalContainer {
		position: absolute;
		top: 85vh;
		left: 75vw;
	}
	.blog__container {
		width: 100%;
		min-height: auto;
		background-image: url('../assets/forest-background-image.webp');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.blog__item {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		padding: 20px 40px;
		text-align: center;
		width: 70vw;
		height: 80vh;
		margin: auto;
		background-image: url('../assets/paper-background-image.webp');
		box-shadow: -1px 2px 44px -2px #2f1812;
	}
	.blog__item--content {
		margin-top: 50px;
	}
	.blog__link {
		margin-top: auto;
		margin-bottom: 50px;
	}
	.git {
		transition: color 100ms ease-in-out;

		font-weight: bold;
		font-family: 'Domine', serif;
		color: #ac6543;
	}
	.git:hover {
		transition: color 100ms ease-in-out;
		text-decoration: underline;
		color: #c66335;
	}
	.explain {
		margin-top: 50px;
	}
</style>
