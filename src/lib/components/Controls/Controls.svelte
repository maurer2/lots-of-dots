<script lang="ts">
  type ControlsProps = {
    count: number;
    defaultCount: number;
  };
  let { count = $bindable(0), defaultCount = 0 }: ControlsProps = $props();

  function changeCount(newCount: typeof count) {
    count += newCount;
  }

  function resetCount() {
    count = defaultCount;
  }

  let prevCount = $state(count);
  // store old value for next render, when props count gets updated again
  // same value on first render
  $effect(() => {
    const currentCount = count;

    return () => {
      prevCount = currentCount;
    };
  });
</script>

<div
  role="group"
  aria-label="Controls for number of indicators"
  class="control-strip"
>
  <!-- Trigger animation restart when count changes -->
  {#key count}
    <output
      for="button-plus-one button-plus-ten button-plus-hundert button-reset"
      class="current-value-indicator"
      style:--current-count={count}
      style:--previous-count={prevCount}
    >
      <span class="sr-only">
        {count}
      </span>
    </output>
  {/key}
  {#each [1, 10, 100, 1000] as increment}
    <button
      type="button"
      id={`button-plus-${increment}`}
      aria-label={`Increase count by ${increment}`}
      onclick={() => changeCount(increment)}>+{increment}</button
    >
  {/each}
  <button type="button" id="button-reset" onclick={resetCount}
    >Reset count to {defaultCount}</button
  >
</div>

<style>
  @layer components {
    .control-strip {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .current-value-indicator {
      min-inline-size: 6ch;
      min-inline-size: calc-size(4ch, size + 2rem);
      align-content: center;
      border: 1px solid currentColor;
      font-variant-numeric: tabular-nums;
      text-align: center;

      animation: change-count 0.25s linear forwards;
      counter-reset: value var(--counter);

      &:before {
        content: counter(value);
      }
    }
  }
</style>
