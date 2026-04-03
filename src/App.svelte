<script lang="ts">
  import Indicators from "./lib/components/Indicators/Indicators.svelte";
  import Controls from "./lib/components/Controls/Controls.svelte";

  const defaultNumberOfIndicators = 5;
  let numberOfIndicators = $state(defaultNumberOfIndicators);

  const hasReducedMotionEnabled = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
</script>

<main class="main">
  <header>
    <h1>Lots of <s>Dots</s> Indicators</h1>
    <p>Checking out "sibling-index()" and "sibling-count()".</p>
    {#if hasReducedMotionEnabled}
      <p role="status">
        Warning, animations are currently disabled owing to reduced motion
        preferences.
      </p>
    {/if}
  </header>

  <section>
    <h2 id="controls">Controls</h2>
    <Controls
      bind:count={numberOfIndicators}
      defaultCount={defaultNumberOfIndicators}
    ></Controls>
  </section>

  <section>
    <h2 id="indicators">Indicators</h2>
    <Indicators count={numberOfIndicators} />
  </section>
</main>

<style>
  @layer components {
    .main {
      display: flow-root;
    }
  }
</style>
