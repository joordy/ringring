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
    margin-bottom: $m30;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      border-bottom: 1px solid #dee2e6;
      li {
        span {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          display: block;
          padding: $m5 $m15;
          cursor: pointer;
          &:hover {
            border-bottom: 2px solid black;
          }
        }
      }
      li.active {
        span {
          border-bottom: 2px solid black;
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
