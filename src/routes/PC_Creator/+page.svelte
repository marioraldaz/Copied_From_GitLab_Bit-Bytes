<script>
	import PC_Creator from '/src/lib/components/PC_Creator/PC_Creator.svelte';
    export let data;
    let products = data.products;
</script>

<PC_Creator {products}/>
