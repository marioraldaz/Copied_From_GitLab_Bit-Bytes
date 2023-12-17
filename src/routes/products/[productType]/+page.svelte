<script>
	import { page } from '$app/stores';
	import MotherBoards from '/src/lib/components/MotherBoards/MotherBoards.svelte';
	import RAMs from '/src/lib/components/RAMs/RAMs.svelte';
	import SSDs from '/src/lib/components/SSDs/SSDs.svelte';
	import CPUs from '/src/lib/components/CPUs/CPUs.svelte';
	import GPUs from '/src/lib/components/GPUs/GPUs.svelte';
	import PC_Creator from '/src/lib/components/PC_Creator/PC_Creator.svelte';
	import ResultsPage from '/src/lib/header/ResultsPage.svelte';

	export let data;
	const products = data;
	let productType = $page.params.productType;
	let types = [
		{
			type: 'RAMs',
			component: RAMs
		},
		{
			type: 'SSDs',
			component: SSDs
		}
	];
	let typeToShow = types.find((elem) => elem.type == productType);
	console.log(typeToShow);
</script>

<svelte:component this={typeToShow.component} {products} />

<style>
</style>
