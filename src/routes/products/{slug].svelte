<script>
	import '/src/lib/body/ProductList.svelte';
	import { page } from '$app/stores';
	let productId = $page.params.productId;
	export let slug;
</script>

<div class="products">
	<h1>{slug}</h1>
</div>

<style>
	.products {
		display: flex;
		height: fit-content;
	}
</style>
