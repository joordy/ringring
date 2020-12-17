<script>
  import GlobalNav from '../components/organisms/GlobalNav.svelte'

  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

<GlobalNav {segment} />

<main>
  <slot />
</main>
