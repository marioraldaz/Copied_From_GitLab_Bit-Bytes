<script>
	import ResultsPage from '/src/lib/body/ResultsPage.svelte';
	import { page } from '$app/stores';
	let search = $page.params.search;
</script>

<ResultsPage {search} />
