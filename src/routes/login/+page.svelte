<script>
	import LogIn from '/src/lib/header/profile/LogIn.svelte';
	import { page } from '$app/stores';

	export let data;
	const { profiles } = data;
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

</script>

<LogIn {profiles}/>
