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
          padding: 0 0 0 80px;
          display: block;
          line-height: 50px;
          text-decoration: none;
          font-family: FontAwesome;
          &::before {
            position: absolute;
            left: 30px;
            font-weight: 300;
            font-size: 24px;
          }
          &:hover {
            border-right: 7px solid $ui-traffic-red;
            color: $ui-traffic-red;
          }
        }
        &:nth-of-type(1) {
          span {
            &::before {
              content: '\f080';
            }
          }
        }
        &:nth-of-type(2) {
          span {
            &::before {
              content: '\f4ad';
            }
          }
        }
        &:nth-of-type(3) {
          span {
            &::before {
              content: '\f4ad';
            }
          }
        }
      }
      .active {
        border-right: 7px solid $ui-traffic-red;
        color: $ui-traffic-red;
        &:hover {
          border-right: none;
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

<!--	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav> -->
