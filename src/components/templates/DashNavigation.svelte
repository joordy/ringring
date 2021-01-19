<script>
  import { onMount } from 'svelte'

  onMount(() => {
    if (Array.isArray(tabItems) && tabItems.length && tabItems[0].value) {
      activeTabValue = tabItems[0].value
    }
  })
  const handleClick = (tabValue) => () => (activeTabValue = tabValue)

  export let tabItems = []
  export let activeTabValue
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  nav {
    ul {
      height: 180px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 100%;
        height: 50px;
        position: relative;
        span {
          padding: 0 0 0 $m80;
          display: block;
          line-height: 50px;
          text-decoration: none;
          &::before {
            position: absolute;
            left: $m30;
            font-weight: $normal;
            font-size: $Heading3;
          }
          &:hover {
            border-right: 7px solid $ui-red;
            color: $ui-red;
          }
          @include darkMode {
            &:hover {
              color: $darkui-softblue;
              border-right: 7px solid $darkui-softblue;
            }
          }
        }
        &:nth-of-type(1) {
          span {
            &::before {
              font-family: FontAwesome;
              content: '\f080';
            }
          }
        }
        &:nth-of-type(2) {
          span {
            &::before {
              font-family: FontAwesome;
              content: '\f4ad';
            }
          }
        }
        &:nth-of-type(3) {
          span {
            &::before {
              font-family: FontAwesome;
              content: '\f4ad';
            }
          }
        }
      }
      .active {
        border-right: 7px solid $ui-red;
        color: $ui-red;
        &:hover {
          border-right: none;
          @include darkMode {
            color: $darkui-blue;
          }
        }
        @include darkMode {
          border-right: 7px solid $darkui-blue;
          color: $darkui-blue;
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
