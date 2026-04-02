<script lang="ts">
  type ControlsProps = {
    count: number;
    defaultNumberOfIndicators: number;
  };
  let { count = $bindable(5), defaultNumberOfIndicators = 5 }: ControlsProps =
    $props();

  function changeNumber(newCount: typeof count) {
    count += newCount;
  }

  function reset() {
    count = defaultNumberOfIndicators;
  }
</script>

<div role="group" aria-label="Dots control" class="control-strip">
  <output
    for="button-plus-one button-plus-ten button-plus-hundert button-reset"
    class="current-value-indicator">{count}</output
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
    id="button-plus-hundert"
    aria-label="Increase count by 100"
    onclick={() => changeNumber(100)}>+100</button
  >
  <button
    type="button"
    id="button-plus-thousand"
    aria-label="Increase count by 1000"
    onclick={() => changeNumber(1000)}>+1000</button
  >
  <button
    type="button"
    id="button-reset"
    aria-label="Reset count"
    onclick={() => reset()}>Reset</button
  >
</div>

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
