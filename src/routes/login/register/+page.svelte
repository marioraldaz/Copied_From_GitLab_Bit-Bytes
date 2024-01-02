<script>
	import Register from '/src/lib/header/profile/Register.svelte';
	export let data;
	let profiles = data.profiles;
</script>

<Register {profiles} />
