<script>
  import TabNavigation from '@/components/molecules/TabNavigation.svelte'
  import FeedbackSection from '@/components/organisms/FeedbackSection.svelte'

  let navigationItems = [
    { label: 'Dag', value: 1 },
    { label: 'Week', value: 2 },
    { label: 'Maand', value: 3 },
    { label: 'Jaar', value: 4 },
  ]
  // Current active tab
  let currentVisitedTab
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-size: $h3-size;
    margin: 0 0 $margin-6 0;
  }
</style>

<h3>Feedback overzicht</h3>

<TabNavigation
  bind:activeTabValue={currentVisitedTab}
  tabItems={navigationItems}
/>
<!-- <code class="language-text" /> -->

{#if 1 === currentVisitedTab}
  <FeedbackSection bind:activeTabValue={currentVisitedTab} title="Dag" />
{:else if 2 === currentVisitedTab}
  <FeedbackSection bind:activeTabValue={currentVisitedTab} title="Week" />
{:else if 3 === currentVisitedTab}
  <FeedbackSection bind:activeTabValue={currentVisitedTab} title="Maand" />
{:else if 4 === currentVisitedTab}
  <FeedbackSection bind:activeTabValue={currentVisitedTab} title="Jaar" />
{/if}
