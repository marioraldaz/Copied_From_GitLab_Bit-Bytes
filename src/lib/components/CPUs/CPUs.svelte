<script>
	import { getComponents } from '/src/stores/products';
	import ProductList from '/src/lib/body/ProductList.svelte';
</script>

<div class="cuerpo">
	<div class="gradiente_img_cabecera row" />
	<h1 class="title">CPUs</h1>
	<ProductList products={getComponents('CPU')} />
</div>

<style lang="scss">
	.title {
		font-size: 5rem;
		text-align: center;
		margin-bottom: 2rem;
		margin-top: 2rem;
	}

	.cuerpo {
		position: relative;
		margin-top: 9rem;
	}
</style>
