<script>
	import { onMount } from 'svelte';
	export let name = 'name';
	export let logo = 'logo_default';
	import Menus from '../../stores/menus.js';
	import Nav from '../../stores/nav.js';
	import { getComponents } from '../../stores/products.js';
	import { goto } from '$app/navigation';
	let menus = [];

	function onClick() {
		Nav.update((data) => {
			data.visibility = false;
			return data;
		});
		goto(`/products/${name}`);
	}

	onMount(() => {
		return Menus.subscribe((data) => {
			menus = data.menus;
		});
	});
</script>

<div class="elem-container">
	<button class="elem-container__button" on:click={onClick}>
		<div class="elem-container__button-image">
			<img src={logo} id={name} class="elem-container__button-image-img" alt="logo-nav-elem" />
		</div>
		<div class="elem-container__button-name">{name}</div>
	</button>
</div>

<style lang="scss">
	.elem-container {
		display: flex;
		margin: 0;
		padding: 0;
		width: 100%;
		border: 3px solid rgb(176, 32, 229);
		&__button {
			width: 100%;
			height: 100%;
			background: none;
			border: none;
			display: flex;
			flex-direction: row;
			&-image {
				display: flex;
				&:hover {
					display: flex;
					transform: scale(120%);
				};
				&-img{
					height:10rem;	
				}
			}

			&-name {
				color: white;
				display: flex;
				font-size: 2rem;
				margin-left:2rem;

			}
			&:hover {
				&-name {
					opacity: 100;
				}
				background-color: rgb(176, 32, 229, 0.2);
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.elem-container {
			height: 10rem;

			.image {
				width: 10rem;
				height: 100%;
				position: absolute;
			}

			&-name {
				position: absolute;
				right: 0;
				font-size: 2.5rem;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		.elem-container {
			text-align: center;
			height: 11rem;

			.image {
				width: 8rem;
				height: 80%;
			}

			.elem-name {
				font-size: 2.3rem;
			}
		}
	}

	@media screen and (max-width: 600px) {
		.elem-container {
			text-align: center;
			height: 12rem;
			.image {
				width: 5rem;
				height: 55%;
			}

			.elem-name {
				font-size: 1.7rem;
				opacity: 100%;
			}
		}
	}
</style>
