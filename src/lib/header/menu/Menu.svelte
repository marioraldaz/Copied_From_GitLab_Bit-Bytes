<script>
	import NavElem from './Nav.svelte';
	import Nav from '../../../stores/nav.js';
	import { onMount } from 'svelte';
	export let visibility = false;

	onMount(() => {
		return Nav.subscribe((data) => {
			visibility = data.visibility;
		});
	});
</script>

<div class="menu-container">
	<div class="menu-container__checkbox">
		<input
			type="checkbox"
			role="button"
			aria-label="Display the menu"
			class="menu"
			bind:checked={visibility}
		/>
	</div>
	{#if visibility}
		<div class="menu-container__nav-container">
			<NavElem />
		</div>
	{/if}
</div>

<style lang="scss">
	@use 'sass:math';
	.menu-container {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	.menu {
		--s: 6rem; /* control the size */
		--c: rgb(176, 32, 229); /* the color */

		height: var(--s);
		aspect-ratio: 1;
		border: none;
		padding: 0;
		margin-top: 1rem;
		margin-bottom: none;
		border-inline: calc(var(--s) / 2) solid rgb(255, 255, 255);

		box-sizing: content-box;
		--_g1: linear-gradient(var(--c) 20%, #0000 0 80%, var(--c) 0) no-repeat content-box border-box;
		--_g2: radial-gradient(circle closest-side at 50% 12.5%, var(--c) 95%, #0000) repeat-y
			content-box border-box;
		background:
			var(--_g2) left var(--_p, 0px) top,
			var(--_g1) left calc(var(--s) / 10 + var(--_p, 0px)) top,
			var(--_g2) right var(--_p, 0px) top,
			var(--_g1) right calc(var(--s) / 10 + var(--_p, 0px)) top;
		background-size:
			20% 80%,
			40% 100%;
		position: relative;
		clip-path: inset(0 25%);
		-webkit-mask: linear-gradient(90deg, #0000, #000 25% 75%, #0000);
		cursor: pointer;
		transition:
			background-position 0.3s var(--_s, 0.3s),
			clip-path 0s var(--_s, 0.6s);
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	.menu:before,
	.menu:after {
		content: '';
		position: absolute;
		border-radius: var(--s);
		inset: 40% 0;
		background: var(--c);
		transition: transform 0.3s calc(0.3s - var(--_s, 0.3s));
	}

	.menu:checked {
		clip-path: inset(0);
		--_p: calc(-1 * var(--s));
		--_s: 0s;
	}
	.menu:checked:before {
		transform: rotate(45deg);
	}
	.menu:checked:after {
		transform: rotate(-45deg);
	}
	.menu:focus-visible {
		clip-path: none;
		-webkit-mask: none;
		border: none;
		outline: 0.2rem solid var(--c);
		outline-offset: 0.5rem;
	}

	.menu:hover {
		transform: scale(120%);
	}

	@media screen and (max-width: 1100px) {
		.menu {
			--s: 4rem;
			top: 0.9rem;
		}
	}

	@media screen and (max-width: 600px) {
		.menu {
			--s: 4.5rem;
			top: 0.8rem;
		}
	}
</style>
