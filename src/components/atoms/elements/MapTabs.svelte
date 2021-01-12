<script>
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()

  export let items
  export let activeItem
</script>

<style lang="scss">
  div {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1;
  }
</style>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <span class:active={item === activeItem}>{item}</span>
      </li>
    {/each}
  </ul>
</div>
