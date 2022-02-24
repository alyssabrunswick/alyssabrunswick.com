<script>
  export let name = "Alyssa Brunswick";
  // Yo! Yes, I built this with a template. Why build from scratch? Efficiency!
  // https://github.com/withastro/astro/tree/main/examples/portfolio-svelte
</script>

<footer>
  &copy; {new Date().getFullYear()}
  {name}
  <small>🌓 🌿 ✨</small>
</footer>

<style>
  footer {
    text-align: center;
    padding: 8rem 2rem 4rem;
  }

  small {
    display: block;
    margin-top: 1rem;
    color: var(--t-subdue);
    font-size: var(--f-d2);
    text-transform: uppercase;
  }
</style>
