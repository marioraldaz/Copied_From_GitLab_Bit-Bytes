<script>
	import { page } from '$app/stores';
	let productType = $page.params.productType;
	import MotherBoards from '/src/lib/components/MotherBoards/MotherBoards.svelte';

	import RAMs from '/src/lib/components/RAMs/RAMs.svelte';
	import SSDs from '/src/lib/components/SSDs/SSDs.svelte';
	import CPUs from '/src/lib/components/CPUs/CPUs.svelte';
	import GPUs from '/src/lib/components/GPUs/GPUs.svelte';
	import PC_Creator from '/src/lib/components/PC_Creator/PC_Creator.svelte';
	import ResultsPage from '/src/lib/header/ResultsPage.svelte';
	let types = [
		//We set an abject component to be able to store a svelte component;
		{ title: 'Admin', component: RAMs },
		{ title: 'Dashboard', component: SSDs }
	];
</script>

<svelte:component this={productType} />

<style>
</style>
