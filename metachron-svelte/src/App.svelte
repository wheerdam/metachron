<script>
	import { onMount } from "svelte";0
	import { token } from './store.js';
	import { api_server } from './store.js';

	let data = [];

	onMount(async function() {
		let url = $api_server + '/post/?limit=10&offset=0&sort=date&sortOrder=1';
		console.log('api server:' + $api_server + ' URL: ' + url);
		const response = await fetch(url);
		data = await response.json();
	});
</script>

<main>
	<h1>Metachron Sample</h1>
	<p>{$api_server}</p>
	{#each data as item}
	<p>{item.title}</p>
	<p>{item.content}</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
