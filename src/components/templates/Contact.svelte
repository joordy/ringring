<script>
  import { TabNavigation } from '@/components/molecules/elements/allElements.js'

  export let activeTabValue
  export let title
  export let data

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
  <title>Dashboard — Contact</title>
</svelte:head>

<section>
  <h2>Dashboard</h2>

  <TabNavigation
    bind:activeTabValue={currentVisitedTab}
    tabItems={navigationItems}
  />
</section>

<h3>{title}</h3>
{#if 1 === currentVisitedTab}
  <h3>a</h3>
  <!-- <StatsSection bind:activeTabValue={currentVisitedTab} title="Dag" {data} /> -->
{:else if 2 === currentVisitedTab}
  <h3>b</h3>
  <!-- <StatsSection bind:activeTabValue={currentVisitedTab} title="Week" {data} /> -->
{:else if 3 === currentVisitedTab}
  <h3>c</h3>
  <!-- <StatsSection bind:activeTabValue={currentVisitedTab} title="Maand" {data} /> -->
{:else if 4 === currentVisitedTab}
  <h3>d</h3>
  <!-- <StatsSection bind:activeTabValue={currentVisitedTab} title="Jaar" {data} /> -->
{/if}
