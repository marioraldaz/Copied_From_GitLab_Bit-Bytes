<script>
	import Header from '/src/lib/header/Header.svelte';
	import Footer from '/src/lib/footer/Footer.svelte';
	import Body from '/src/lib/body/Body.svelte';
</script>

<div class="header"><Header /></div>
<div class="body"><slot /></div>
<div class="footer"><Footer /></div>
