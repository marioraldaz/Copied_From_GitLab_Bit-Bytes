<script>
	import NavElem from './NavElem.svelte';
	import Menus from '../../../stores/menus.js';
	import { onMount } from 'svelte';
	import { clickOutside } from '../../../scripts/clickOutside.js';
	import Nav from '../../../stores/nav.js';
	let visibility = false;
	let menus = [];
	let hideAnimation = false;

	onMount(() => {
		return Menus.subscribe((data) => {
			menus = data.menus;
		});
	});

	onMount(() => {
		return Nav.subscribe((data) => {
			visibility = data.visibility;
		});
	});

	function hide() {
		hideAnimation = true;
		setTimeout(() => {
			Nav.update((data) => {
				data.visibility = false;
				return data;
			});
		}, 1000);
	}
</script>

<nav class=" {hideAnimation ? 'hide' : 'menu-nav'}" use:clickOutside on:click_outside={hide}>
	{#each menus as navEl}
		{#if navEl.name == 'Body'}
			<span />
		{:else}
			<NavElem name={navEl.name} logo={navEl.logo} />
		{/if}
	{/each}
</nav>

<style lang="scss">
	.menu-nav {
		animation-name: slide;
		animation-duration: 2s;
		margin-top: 1rem;
		overflow:scroll;
		height: 100vh;
		display: flex;
		flex-direction: column;
		border: 0.1rem solid rgb(94, 176, 208);
		width: 150%;
		min-height: 100vh;
		z-index: 98;
		background: linear-gradient(60deg, rgb(176, 32, 229) 25%, rgb(94, 176, 208));
		transition: 0.4s;
		padding-bottom: 20rem;
		flex-grow: 1;
	}

	.hide {
		animation-name: hide;
		animation-duration: 2s;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		border: 0.1rem solid rgb(94, 176, 208);
		width: 20%;
		min-height: 100vh;
		z-index: 98;
		background: linear-gradient(60deg, rgb(176, 32, 229) 25%, rgb(94, 176, 208));
		transition: 0.4s;
	}

	@keyframes slide {
		from {
			transform: translateX(-50%);
		}

		to {
			transform: translateX(0%);
  		}
	}

	@keyframes hide {
		from {
			transform: translateX(0%);
		}

		to {
			transform: translateX(-50%);
  		}
	}
	@media screen and (max-width: 1100px) {
		.menu-nav {
			margin-top: 2.9rem;
			width: 22%;
		}
	}

	@media screen and (max-width: 600px) {
		.menu-nav {
			margin-top: 2.3rem;
			width: 42%;
		}
	}
</style>
