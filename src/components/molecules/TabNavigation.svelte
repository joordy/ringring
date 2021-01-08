<script>
  import { onMount } from 'svelte'

  export let tabItems = []
  export let activeTabValue

  onMount(() => {
    if (Array.isArray(tabItems) && tabItems.length && tabItems[0].value) {
      activeTabValue = tabItems[0].value
    }
  })
  const handleClick = (tabValue) => () => (activeTabValue = tabValue)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  nav {
    position: absolute;
    bottom: 0;
    ul {
      margin-left: $m50;
      width: 250px;
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        span {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          display: block;
          padding-bottom: $m5;
          cursor: pointer;
          &:hover {
            padding-bottom: $m5;
            border-bottom: 4px solid $ui-traffic-red;
          }
        }
      }
      li.active {
        span {
          color: $ui-traffic-red;
          border-bottom: 4px solid $ui-traffic-red;
          font-weight: $bold;
        }
      }
    }
  }
</style>

<nav>
  <ul>
    {#if Array.isArray(tabItems)}
      {#each tabItems as item}
        <li class={activeTabValue === item.value ? 'active' : ''}>
          <span on:click={handleClick(item.value)}>{item.label}</span>
        </li>
      {/each}
    {/if}
  </ul>
</nav>
