<script>
	import Header from '/src/lib/header/Header.svelte';
	import Footer from '/src/lib/footer/Footer.svelte';
</script>

<div class="header"><Header /></div>
<div class="body"><slot /></div>
<div class="footer"><Footer /></div>

<style lang="scss">
	.body {
		flex: 1;
		display: flex;
		flex-direction: column;

	}
	.header{
		display: flex;
	}

	.body{
		display: flex;
	}
</style>
