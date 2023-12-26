<script>
	import ProductList from '/src/lib/body/ProductList.svelte';
	import { searchProducts } from '/src/stores/products.js';
	export let search;
	let products = searchProducts(search);
	let filteredProducts = products;

	let prices = [];
	products.map((product) => prices.push(product.price));
	let lowestPrice = Math.min(...prices);
	let highestPrice = Math.max(...prices);
	let minPrice = lowestPrice;
	let maxPrice = highestPrice;
	$: {
		filteredProducts = products;
		let newProducts = [];
		for (let product of products) {
			if (product.price >= minPrice && product.price <= maxPrice) {
				newProducts.push(product);
			}
		}
		filteredProducts = newProducts;
		console.log(filteredProducts);
	}
</script>

<div class="container">
	<div class="container__filters">
		<div class="container__filters__price">
			<h1 class="container__filters__price__title">Price Range</h1>
			<div class="container__filters__price__bar">
				<div class="container__filters__price__bar__min">
					MIN:<input
						type="number"
						class="container__filters__price__bar__min__numberbox"
						value={minPrice}
						min={lowestPrice}
						max={highestPrice}
					/>
					<input type="range" min={lowestPrice} max={highestPrice} bind:value={minPrice} />
				</div>
				<div class="container__filters__price__bar__max">
					<input type="range" max={highestPrice} min={lowestPrice} bind:value={maxPrice} />
					MAX:<input
						type="number"
						class="container__filters__price__bar__max__numberbox"
						value={maxPrice}
						min={lowestPrice}
						max={highestPrice}
					/>
				</div>
			</div>
		</div>
	</div>
	{#if products.length == 0}
		<h1 class="container__title">We could not find any products matching your search :c</h1>
	{:else}
		<h1 class="container__title">This is what we found:</h1>
		<div class="container__productList">
			<ProductList products={filteredProducts} />
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		width: 100%;
		margin-top: 10rem;
		display: flex;
		flex-direction: column;
		&__filters {
			width: 80%;
			height: 15rem;
			margin-left: 4rem;
			background-color: white;
			display: inline-block;
			height: 14rem;
			&__price {
				padding: 2rem;
				width: 70rem;
				font-size: 2rem;
				height: 14rem;
				float: left;
				position: relative;

				&__title {
					background-color: white;
					width: 10rem;
					font-size: 2rem;
					display: flex;
					
				}	
				&__bar{
					position: relative;
					left:13%;	
					top:-40%;
					&__min {
						cursor: pointer;
						font-size: 3rem;
						position: absolute;
						top: 40%;
						left: 0;
						height: 50%;
						width: fit-content;
					}

          &__max {
              cursor: pointer;
              font-size: 3rem;
              position: absolute;
              top: 40%;
              left: 36.3%;
              height: 50%;
            }
		}
			}
		}
		&__title {
			font-size: 5rem;
			text-align: left;
			height: 10rem;
			width: 60rem;
			margin-left: 4rem;
		}
		&__productList {
			width: 100%;
		}
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		input[type='range'] {
			overflow: hidden;
			width: 11rem;
			-webkit-appearance: none;
			background-color: #d8b400;
		}

		input[type='range']::-webkit-slider-runnable-track {
			height: 1.5rem;
			-webkit-appearance: none;
			color: rgb(19, 187, 117);
			margin-top: -0.1rem;
		}

		input[type='range']::-webkit-slider-thumb {
			width: 1rem;
			-webkit-appearance: none;
			height: 1.5rem;
			cursor: ew-resize;
			background: #000000;
			box-shadow: -8rem 0 0 80rem #43e5f7;
		}
	}

	/** FF*/
	input[type='range']::-moz-range-progress {
		background-color: #43e5f7;
	}

	input[type='range']::-moz-range-track {
		background-color: #9a905d;
	}

	/* IE*/
	input[type='range']::-ms-fill-lower {
		background-color: #43e5f7;
	}

	input[type='range']::-ms-fill-upper {
		background-color: #9a905d;
	}
</style>
