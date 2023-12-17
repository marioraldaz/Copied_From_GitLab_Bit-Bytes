<script>
	import Header from '/src/lib/header/Header.svelte';
	import Footer from '/src/lib/footer/Footer.svelte';
</script>

<div class="app">
	<div class="header"><Header /></div>
	<div class="body"><slot /></div>
	<div class="footer"><Footer /></div>
</div>

<style>
	.app {
		display: block;
	}
	.body {
		height: fit-content;
	}
</style>
