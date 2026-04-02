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
      --animation-name: opacity-fade-in;
      --index: calc(sibling-index() - 1);
      --delay-of-current-item: calc(
        var(--animation-duration) / sibling-count()
      );

      /* --animation-name: if(
        style(--index > 3): opacity-fade-in; else: opacity-fade-out
      ); */

      /* doesn't work */
      /* --percent-completion: calc(calc(var(--index) * 100) / sibling-count()); */
      /* --animation-name: if(
        style(--percent-completion > 50): opacity-fade-in; else:
          opacity-fade-out
      ); */

      aspect-ratio: 1;
      border: 1px solid currentColor;
      animation: var(--animation-name) var(--animation-duration) ease-in-out
        infinite alternate;
      animation-delay: calc(var(--index) * var(--delay-of-current-item));
      background: var(--highlight-not-subtle);
    }
  }
</style>
