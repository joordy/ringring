<script>
  import TabNavigation from '@/components/molecules/TabNavigation.svelte'
  import StatsSection from '@/components/organisms/StatsSection.svelte'

  let navigationItems = [
    { label: 'Dag', value: 1 },
    { label: 'Week', value: 2 },
    { label: 'Maand', value: 3 },
    { label: 'Jaar', value: 4 },
  ]
  // Current active tab
  let currentVisitedTab
  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-size: $h3-size;
    margin: 0 0 $margin-6 0;
  }
  // div {
  //   overflow-y: scroll;
  // }
</style>

<!-- <div> -->
<h3>Statistieken overzicht</h3>

<TabNavigation
  bind:activeTabValue={currentVisitedTab}
  tabItems={navigationItems}
/>

<!-- <code class="language-text" /> -->
{#if 1 === currentVisitedTab}
  <StatsSection bind:activeTabValue={currentVisitedTab} title="Dag" {data} />
{:else if 2 === currentVisitedTab}
  <StatsSection bind:activeTabValue={currentVisitedTab} title="Week" {data} />
{:else if 3 === currentVisitedTab}
  <StatsSection bind:activeTabValue={currentVisitedTab} title="Maand" {data} />
{:else if 4 === currentVisitedTab}
  <StatsSection bind:activeTabValue={currentVisitedTab} title="Jaar" {data} />
{/if}
<!-- </div> -->
