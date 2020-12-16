<script>
  import Navigation from '../components/organisms/Navigation.svelte'

  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

<Navigation {segment} />

<main>
  <slot />
</main>
