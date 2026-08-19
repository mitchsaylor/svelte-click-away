<script lang="ts">
	import { clickAway } from '#lib/index.ts';

	let open: boolean = $state(false);

	const handleClickAway = () => {
		open = false;
	};
</script>

<main class="p-8">
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
	<button
		class="border border-black p-3 hover:bg-black/5"
		use:clickAway
		onclickaway={handleClickAway}
		onclick={() => (open = true)}
	>
		Click this to set value to true, click away to set to false.
	</button>
	<p>The toggle value is currently: {open.toString()}</p>
</main>
