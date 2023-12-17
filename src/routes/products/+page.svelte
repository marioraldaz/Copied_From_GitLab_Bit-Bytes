<script>
	import '/src/lib/body/ProductList.svelte';
	import { page } from '$app/stores';
	let productId = $page.params.productId;
</script>

<div class="products1">
	<h1>{productId}</h1>
</div>

<style>
	.products {
		display: flex;
		height: fit-content;
	}
</style>
