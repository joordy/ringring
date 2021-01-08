<script>
  import { StatsContent } from '@/components/organisms/allOrganisms.js'
  import TabNavigation from '@/components/molecules/TabNavigation.svelte'

  export let activeTabValue
  export let title
  export let data

  $: console.log(data)
  let currentVisitedTab
  let navigationItems = [
    { label: 'Dag', value: 1 },
    { label: 'Week', value: 2 },
    { label: 'Maand', value: 3 },
    { label: 'Jaar', value: 4 },
  ]
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
  <title>Dashboard — Statistieken</title>
</svelte:head>

<section>
  <h2>Dashboard</h2>

  <TabNavigation
    bind:activeTabValue={currentVisitedTab}
    tabItems={navigationItems}
  />
</section>

<!-- <h3>{title}</h3> -->
{#if 1 === currentVisitedTab}
  <StatsContent bind:activeTabValue={currentVisitedTab} title="Dag" {data} />
{:else if 2 === currentVisitedTab}
  <StatsContent bind:activeTabValue={currentVisitedTab} title="Week" {data} />
{:else if 3 === currentVisitedTab}
  <StatsContent bind:activeTabValue={currentVisitedTab} title="Maand" {data} />
{:else if 4 === currentVisitedTab}
  <StatsContent bind:activeTabValue={currentVisitedTab} title="Jaar" {data} />
{/if}
