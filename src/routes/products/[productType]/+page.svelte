<script>
	import { page } from '$app/stores';
	import MotherBoards from '/src/lib/components/MotherBoards/MotherBoards.svelte';
	import RAMs from '/src/lib/components/RAMs/RAMs.svelte';
	import SSDs from '/src/lib/components/SSDs/SSDs.svelte';
	import CPUs from '/src/lib/components/CPUs/CPUs.svelte';
	import GPUs from '/src/lib/components/GPUs/GPUs.svelte';
	import PC_Creator from '/src/lib/components/PC_Creator/PC_Creator.svelte';
	import ResultsPage from '/src/lib/body/ResultsPage.svelte';

	let productType = $page.params.productType;
	$: productType = $page.params.productType;

	let types = [
		{
			type: 'RAMs',
			component: RAMs
		},
		{
			type: 'SSDs',
			component: SSDs
		},
		{
			type: 'CPUs',
			component: CPUs
		},
		{
			type: 'GPUs',
			component: GPUs
		},
		{
			type: 'Motherboards',
			component: MotherBoards
		},
		{
			type: 'PC_Creator',
			component: PC_Creator
		},
		{
			type: 'ResultsPage',
			component: ResultsPage
		}
	];
	let typeToShow = types.find((elem) => elem.type == productType);
</script>

{#key $page.params.productType}
	{#if typeToShow}
		<svelte:component this={typeToShow.component} />
	{:else}
		<p>Invalid product type</p>
	{/if}
{/key}

<style>
</style>
