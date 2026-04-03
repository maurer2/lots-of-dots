<script lang="ts">
  import Indicators from "./lib/components/Indicators/Indicators.svelte";
  import Controls from "./lib/components/Controls/Controls.svelte";

  const defaultNumberOfIndicators = 5;
  let numberOfIndicators = $state(defaultNumberOfIndicators);

  const hasReducedMotionEnabled = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
</script>

<header class="header container--full-bleed">
  <div class="container">
    <h1>Lots of <s>Dots</s> Indicators</h1>
    <p>Checking out <i>sibling-index()</i> and <i>sibling-count()</i>.</p>
    {#if hasReducedMotionEnabled}
      <p role="status">
        Warning, animations are currently disabled owing to reduced motion
        preferences.
      </p>
    {/if}
    <div class="container"></div>
  </div>
</header>
<main class="main">
  <section class="controls container">
    <h2 id="controls">Controls</h2>
    <Controls
      bind:count={numberOfIndicators}
      defaultCount={defaultNumberOfIndicators}
    ></Controls>
  </section>
  <section class="indicators container">
    <h2 id="indicators">Indicators</h2>
    <Indicators count={numberOfIndicators} />
  </section>
</main>

<style>
  @layer components {
    .header {
      /* border-block-end: 1px solid currentColor; */
      background: var(--text);
      color: oklch(100% 0 0);
      /* @supports (color: contrast-color(var(--text))) {
        color: contrast-color(var(--text));
      } */
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .controls,
    .indicators {
      display: flow-root;
    }
  }
</style>
