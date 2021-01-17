<script>
  // import { CopyRight } from '@/components/molecules/allElements.js'

  import {
    DashHeader,
    StatsContent,
  } from '@/components/organisms/allElements.js'

  export let data
</script>

<!--<style lang="scss">
  @import 'src/styles/index.scss';
</style>-->

<svelte:head>
  <title>Statistieken Dashboard | Ring-Ring</title>
</svelte:head>

<DashHeader />

<StatsContent {data} />

<!-- <CopyRight /> -->
