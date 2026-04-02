<script>
  import Dots from "./lib/components/Dots/Dots.svelte";
  // import NumberStepper from "./lib/components/NumberStepper/NumberStepper.svelte";

  const defaultNumberOfDots = 5;
  let numberOfDots = $state(defaultNumberOfDots);
</script>

<main>
  <section aria-label="Dots">
    <Dots count={numberOfDots} />
  </section>

  <section>
    <h2 id="contact-heading">Controls</h2>

    <div role="group" aria-label="Dots control">
      <output for="button-plus-one button-plus-ten button-reset"
        >{numberOfDots}</output
      >

      <button
        type="button"
        id="button-plus-one"
        aria-label="Increade count by 1"
        onclick={() => (numberOfDots = numberOfDots + 1)}>+1</button
      >
      <button
        type="button"
        id="button-plus-ten"
        aria-label="Increade count by 10"
        onclick={() => (numberOfDots = numberOfDots + 10)}>+10</button
      >
      <button
        type="button"
        id="button-reset"
        aria-label="Reset count"
        onclick={() => (numberOfDots = defaultNumberOfDots)}>Reset</button
      >
    </div>
  </section>
</main>
