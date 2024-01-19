<script>
	import Header from './Header.svelte';
	import './styles.css';

	const socials = [
		// {
		// 	name: 'Twitter',
		// 	url: 'https://twitter.com/alyssabrunswick'
		// },
		{
			name: 'Instagram',
			url: 'https://instagram.com/alyssabrunswick'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/alyssabrunswick'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/alyssabrunswick'
		}
	];
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()}</p>

		<div>
			{#each socials as social, index}
				<li>
					<a href={social.url} target="_blank" rel="noopener noreferrer">
						{social.name}
					</a>
				</li>
			{/each}
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		background-color: var(--color-theme-1);
		display: grid;
		grid-template-columns: 3fr 1fr;
		padding: 1rem;
	}
	footer p {
		color: var(--color-text-light);
	}

	footer a {
		font-weight: bold;
		color: var(--color-text-light);
	}

	footer li {
		list-style-type: none;
	}

	@media (min-width: 480px) {
		/* footer {
			padding: 12px 0;
		} */
	}
</style>
