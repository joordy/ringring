<script>
  import { TabNavigation } from '@/components/molecules/elements/allElements.js'

  import {
    FeedContent,
    AccountInfo,
  } from '@/components/organisms/allOrganisms.js'

  export let title
  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    height: 130px;
    position: relative;
    background-color: $ui-white;
    border-bottom: 1px solid $ui-grey;
    h2 {
      font-size: $Heading2;
      font-weight: $bold;
      line-height: 48px;
      padding: $m30 $m50 $m30 $m50;
    }
  }
</style>

<svelte:head>
  <title>Dashboard — Feedback</title>
</svelte:head>

<section>
  <h2>Dashboard</h2>

  <TabNavigation />

  <AccountInfo />
</section>

<FeedContent title="Maand" {data} />
