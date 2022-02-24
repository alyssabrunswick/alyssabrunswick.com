<nav>
  <a class="logolink" href="/">
    <div class="monogram">AB</div>
  </a>
  <a class="link" href="/projects">Portfolio</a>
  <a class="link" href="/about">About</a>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }
  .logolink {
    display: block;
    color: var(--t-fg);
    text-decoration: none;
  }
  .link {
    color: var(--t-subdue);
    display: block;
    margin-left: 1rem;
    text-decoration: none;
    font-size: var(--f-d1);
    text-transform: uppercase;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
  }
  .link:focus,
  .link:hover {
    color: var(--t-active);
  }
  .monogram {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    margin-right: 0.5rem;
    color: var(--c-black);
    font-weight: 900;
    letter-spacing: -0.025rem;
    border: 3px solid currentColor;
    border-radius: 50%;
  }
  .social {
    display: block;
    margin-left: auto;
  }
  .social + .social {
    margin-left: 0.75rem;
  }
  .socialicon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--t-subdue);
    transition: fill linear 150ms;
  }
  .socialicon:hover {
    fill: var(--t-active);
  }
</style>
