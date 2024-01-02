<script>
	import Product from './Product.svelte';

	export let products;
	console.log(products);
</script>

<div class="list">
	{#each products as product}
		<div class="column">
			<Product {product} />
		</div>
	{/each}
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-wrap: wrap;
		padding: 1rem;
		width: 100%;
		flex-direction: row;
		min-height: 0;
	}

	.column {
		display: flex;
		align-items: center; /* Center the items vertically */

		width: 30rem;
		height: 35rem;
		margin: 1rem;
	}

	@media screen and (min-width: 1100px) {
		.column {
			width: 25%;
		}
	}

	@media screen and (max-width: 1100px) {
		.column {
			width: 50%;
		}
	}

	@media screen and (max-width: 600px) {
		.column {
			width: 100%;
		}
	}
</style>
