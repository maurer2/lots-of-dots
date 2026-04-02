<script lang="ts">
  type DotsProps = {
    count: number;
  };

  let { count }: DotsProps = $props();
</script>

{#key count}
  <div role="status" aria-label="Loading" class="dots">
    {#each { length: count }}
      <span aria-hidden="true" class="dot"></span>
    {/each}
  </div>
{/key}

<style>
  @layer components {
    .dots {
      display: flex;
      gap: 0.5rem;
    }

    .dot {
      inline-size: 1rem;
      aspect-ratio: 1;
      border: 1px solid currentColor;
      animation: opacity-fade-in 1s ease-in-out infinite;
      animation-delay: calc((sibling-index()) * calc(1s / sibling-count()));
      background: red;
      flex: 0 0 auto;
    }
  }
</style>
