<script>
  import {
    MapAllRoutes,
    MapEndpoint,
    MapStartpoint,
  } from '@/components/atoms/charts/allCharts.js'

  import {
    VizHeader,
    MapTabs,
  } from '@/components/atoms/elements/allElements.js'

  export let data
  export let title

  let items = ['Alle routes', 'Startpunt', 'Eindpunt']
  let activeItem = 'Alle routes'
  let tabChange = (e) => (activeItem = e.detail)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: $borderS;
    position: relative;
    article {
      padding: $m15 $m20;
      height: calc(100% - 30px);
    }
  }
</style>

<div id="mapchart">
  <article class="mapViz">
    <VizHeader {title} />

    <MapTabs {activeItem} {items} on:tabChange={tabChange} />

    {#if activeItem === 'Alle routes'}
      <MapAllRoutes {data} />
    {:else if activeItem === 'Startpunt'}
      <MapStartpoint {data} />
    {:else if activeItem === 'Eindpunt'}
      <MapEndpoint {data} />
    {/if}
  </article>
</div>
