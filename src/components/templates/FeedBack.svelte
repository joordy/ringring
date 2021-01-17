<script>
  // import { CopyRight } from '@/components/molecules/allElements.js'
  import {
    DashHeader,
    FeedContent,
  } from '@/components/organisms/allElements.js'

  export let data
</script>

<!--<style lang="scss">
  @import 'src/styles/index.scss';
</style>-->

<svelte:head>
  <title>Feedback Dashboard | Ring-Ring</title>
</svelte:head>

<DashHeader />

<FeedContent {data} />

<!-- <CopyRight /> -->
