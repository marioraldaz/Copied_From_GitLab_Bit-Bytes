<script>
	import { getProducts } from '/src/stores/products';
	import Menus from '/src/stores/menus.js';
	import { clickOutside } from '/src/scripts/clickOutside.js';
	import ImageSearch from './ImageSearch.svelte';
	import { goto } from '$app/navigation';

	let products = getProducts();
	let output = [];
	let showResults = false;
	let userInput = '';
	let hiddenSearchBar = true;
	
	function hiddenSearch() {
		hiddenSearchBar = !hiddenSearchBar;
	}

	function searchProducts(userInput) {
		output = [];
		for (var i = 0; i < products.length; i++) {
			if (products[i].name.toUpperCase().match(userInput.toUpperCase())) {
				output.push(products[i]);
			}
		}
		//need to save all of them and show only 5.

		for (var i = 0; i < products.length; i++) {
			if (products[i].type.toUpperCase().match(userInput.toUpperCase())) {
				output.push(products[i]);
			}
		}
	}

	$: {
		userInput.length > 0 ? (showResults = true) : (showResults = false);
	}

	$: {
		showResults ? searchProducts(userInput) : (output = output);
	}
	function hideResults() {
		showResults = false;
	}
	function showSearchResults(item) {
		return function () {
			hiddenSearchBar = true;
			showResults = false;
		
			userInput.length==0 ? goto(`/resultsPage/showAll`): goto(`/resultsPage/${userInput}`);
			Menus.update((data) => {
				data.active = 'ResultsPage';
				return data;
			});
		};
	}
</script>

{#if hiddenSearchBar}
	<div class="header__searchBar">
		<ImageSearch on:click={hiddenSearch} urlImage="/src/lib/header/images/search_logo.png" />
	</div>
{:else}
	<div class="container">
		<div class="container__searchBar" use:clickOutside on:click_outside={hiddenSearch}>
			<input
				type="search"
				class="container__searchBar--input"
				placeholder="   Search for amazing components"
				bind:value={userInput}
			/>

			<button class="container__search-button" on:click={showSearchResults([])}>
				<div class="container__search-button__div">
					<img alt="logo" src="/src/lib/header/images/search_logo.png" />
				</div>
			</button>
		</div>

		{#if showResults}
			<div class="container__results" use:clickOutside on:click_outside={hideResults}>
				<h1 class="container__results__title">Results:</h1>
				{#each output.slice(0, 5) as item}
					<button class="container__results__elem" on:click={showSearchResults([item])}>
						<img src={item.logo} class="container__results__elem__img" alt="img" />
						{item.name}</button
					>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.header__searchBar {
		height: auto;
		animation: hideicon;
		animation-duration: 5s;
		animation-timing-function: ease-in;
	}

	.container {
		width: 45rem;
		height: 5rem;
		display: flex;
		justify-content: center;
		transition: all 2s ease-out;
		flex-wrap: wrap;
		&__results {
			transition: all 0.5s ease-out;
			width: 150%;
			margin-top: 1rem;
			float: right;
			transform: translateX(13rem);
			&__title {
				width: 100%;
				background-color: white;
				font-size: 2rem;
				color: rgb(94, 176, 208);
				border: 2px solid black;
			}
			&__elem {
				width: 100%;
				height: 14rem;
				background-color: white;
				float: inline-end;
				font-size: 2.5rem;
				font-family: 'Courier New', Courier, monospace;
				font-weight: 800;
				border: 1px solid black;
				&:hover {
					cursor: pointer;
					background-color: azure;
				}

				&__img {
					float: left;
					height: 90%;
					width: 20%;
				}
			}
		}

		&__searchBar {
			position: relative;

			width: 80%;
			height: 100%;
			border-radius: 2rem;
			background-color: red;
			transition: all 0.5s ease-out;
			&:hover {
				transform: scale(110%);
			}

			&--input {
				position: relative;
				width: 100%;
				height: 100%;
				border: 0.2rem dotted rgb(0, 0, 0);
				border-radius: 2rem;
				padding-left: 3rem;

				&:focus {
					border: 0.3rem dotted rgb(0, 0, 0);
					outline: none;
				}
			}
		}

		&__search-button {
			position: relative;
			top: -90%;
			left: 85%;
			width: 3.5rem;
			height: 3.5rem;
			background: none;
			border: none;
			z-index: 100;
			&:hover {
				cursor: pointer;
				transform: scale(120%);
			}
			&__div {
				width: 100%;
				height: 100%;

				& img {
					height: 100%;
				}
			}
		}
	}

	@media screen and (max-width: 1600px) {
		.container {
			clear: both;
			left: -30%;
		}
	}

	@media screen and (max-width: 1100px) {
		.container {
			&__results {
				width: 120%;
				transform: translateX(5rem);
			}
		}
	}

	@media screen and (max-width: 600px) {
		.container {
			&__searchBar {
				top: 50%;
				margin-bottom: 5%;
			}
			&__results {
				width: 90%;
				transform: translateX(2rem);
			}
		}
	}
</style>
