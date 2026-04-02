<script lang="ts">
  import Dots from "./lib/components/Dots/Dots.svelte";
  // import NumberStepper from "./lib/components/NumberStepper/NumberStepper.svelte";

  const defaultNumberOfDots = 5;
  let numberOfDots = $state(defaultNumberOfDots);

  function changeNumber(newCount: typeof numberOfDots) {
    numberOfDots += newCount;
  }

  function reset() {
    numberOfDots = defaultNumberOfDots;
  }
</script>

<main class="main">
  <section aria-label="Dots">
    <Dots count={numberOfDots} />
  </section>

  <section>
    <h2 id="contact-heading">Controls</h2>

    <div role="group" aria-label="Dots control" class="control-strip">
      <output
        for="button-plus-one button-plus-ten button-reset"
        class="current-value-indicator">{numberOfDots}</output
      >

      <button
        type="button"
        id="button-plus-one"
        aria-label="Increase count by 1"
        onclick={() => changeNumber(1)}>+1</button
      >
      <button
        type="button"
        id="button-plus-ten"
        aria-label="Increase count by 10"
        onclick={() => changeNumber(10)}>+10</button
      >
      <button
        type="button"
        id="button-reset"
        aria-label="Reset count"
        onclick={() => reset()}>Reset</button
      >
    </div>
  </section>
</main>

<style>
  @layer components {
    .control-strip {
      display: flex;
      gap: 0.5rem;
    }

    .current-value-indicator {
      padding-inline: 1rem;
      align-content: center;
      border: 1px solid currentColor;
    }
  }
</style>
