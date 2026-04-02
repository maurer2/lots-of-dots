<script lang="ts">
  type DotsProps = {
    count: number;
  };

  let { count }: DotsProps = $props();
</script>

<div role="status" aria-label="Loading">
  {#each { length: count }, currentCount}
    <span aria-hidden="true" class="dot">{currentCount}</span>
  {/each}
</div>

<style>
  @layer components {
  }
</style>
