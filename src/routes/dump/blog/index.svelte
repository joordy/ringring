<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  h1 {
    font-size: 32px;
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
