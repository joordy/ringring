<script>
  import { url } from '@roxi/routify';
  // import RoutifyIntro from './example/_components/RoutifyIntro.svelte';
  import { metatags } from '@roxi/routify';
  metatags.title = 'My Routify app';
  metatags.description = 'Description coming soon...';
</script>

<style lang="scss">
  section {
    background-color: hotpink;
    h1 {
      font-size: 2rem;
    }
  }
</style>

<!-- <RoutifyIntro /> -->

<section>
  <h1>Home</h1>
  <a href={$url('./blog')}>blog</a>
  <a href={$url('./test')}>test</a>
</section>
