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
    top: $m15;
    right: $m20;
    z-index: 1;
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      transition: 0.3s;
      li {
        list-style-type: none;
        margin: 0 $m10;
      }
      .active {
        border-bottom: 2px solid $ui-red;
        @include darkMode {
          border-bottom: 2px solid $darkui-blue;
        }
      }
    }
  }
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
