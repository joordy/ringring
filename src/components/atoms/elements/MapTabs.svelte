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
        opacity: 0.4;
        font-size: 14px;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
          border-bottom: 2px solid $ui-red;
          @include darkMode {
            border-bottom: 2px solid $darkui-blue;
          }
        }
      }
      .active {
        opacity: 1;
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
