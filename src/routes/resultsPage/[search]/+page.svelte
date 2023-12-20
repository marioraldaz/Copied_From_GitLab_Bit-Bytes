<script>
	import { searchProducts } from '/src/stores/products.js';
	import ResultsPage from '/src/lib/header/ResultsPage.svelte';
	import { page } from '$app/stores';
	let search = $page.params.search;
</script>

<ResultsPage {search} />
