<script lang="ts">
  type IndicatorsProps = {
    count: number;
  };
  let { count }: IndicatorsProps = $props();
</script>

{#key count}
  <div role="status" aria-label="Loading" class="indicators">
    {#each { length: count }}
      <span aria-hidden="true" class="indicator"></span>
    {/each}
  </div>
{/key}

<style>
  @layer components {
    .indicators {
      display: grid;
      grid-template-columns: repeat(auto-fill, 1rem);
      grid-auto-rows: 1rem;
      gap: 0.5rem;
    }

    .indicator {
      aspect-ratio: 1;
      border: 1px solid currentColor;
      animation: opacity-fade-in var(--animation-duration) ease-in-out infinite;
      animation-delay: calc(
        (sibling-index()) * calc(var(--animation-duration) / sibling-count())
      );
      background: var(--highlight-not-subtle);
    }
  }
</style>
