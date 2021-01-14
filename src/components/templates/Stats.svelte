<script>
  import { TabNavigation } from '@/components/molecules/elements/allElements.js'

  import {
    StatsContent,
    AccountInfo,
  } from '@/components/organisms/allOrganisms.js'

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
      line-height: 48px;
      font-weight: $bold;
      padding: $m30 $m50 $m30 $m50;
    }
  }
</style>

<svelte:head>
  <title>Statiestieken Dashboard | Ring-Ring</title>
</svelte:head>

<section>
  <h2>Dashboard</h2>

  <TabNavigation />

  <AccountInfo />
</section>

<StatsContent title="Maand" {data} />
