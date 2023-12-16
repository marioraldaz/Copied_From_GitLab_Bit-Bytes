<script>
	import Header from '/src/lib/header/Header.svelte';
	import Footer from '/src/lib/footer/Footer.svelte';
</script>

<div class="header"><Header /></div>
<slot />
<div class="footer"><Footer /></div>
