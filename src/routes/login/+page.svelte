<script>
	import LogIn from '/src/lib/header/LogIn.svelte';
	export let data;
	export let form;
	
</script>

<LogIn profiles={data.profiles}/>
