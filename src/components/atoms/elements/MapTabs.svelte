<script>
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()

  export let items
  export let activeItem
  let selected
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1;
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        list-style-type: none;
        margin: 0 $m10;
      }
      .active {
        border-bottom: 2px solid $ui-red;
      }
    }
  }
  // ul {
  //   margin: 0;
  //   padding: 0;
  //   display: flex;
  //   li {
  //     list-style-type: none;
  //   }
  //   .active {
  //     border-bottom: 2px solid $ui-red;
  //   }
  // }
  //}
</style>

<div class="tabs">
  <ul>
    {#each items as item}
      <li
        on:click={() => dispatch('tabChange', item)}
        class:active={item === activeItem}
      >
        <span>{item}</span>
      </li>
    {/each}
  </ul>
</div>
