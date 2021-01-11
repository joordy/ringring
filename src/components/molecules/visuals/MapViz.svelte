<script>
  import MapTabs from '@/components/atoms/MapTabs.svelte'
  import VizTitle from '@/components/atoms/VizHeader.svelte'
  import MapAllRoutes from '@/components/atoms/MapAllRoutes.svelte'
  import MapEndpoint from '@/components/atoms/MapEndpoint.svelte'
  import MapStartpoint from '@/components/atoms/MapStartpoint.svelte'

  export let data
  export let title

  let items = ['Alle routes', 'Startpunt', 'eindpunt']
  let activeItem = 'Alle routes'
  let tabChange = (e) => (activeItem = e.detail)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    position: relative;
    article {
      padding: $margin-3 $margin-4;
      height: calc(100% - 30px);
    }
  }
</style>

<div id="mapchart">
  <article class="mapViz">
    <VizTitle {title} />

    <MapTabs {activeItem} {items} on:tabChange={tabChange} />

    {#if activeItem === 'Alle routes'}
      <MapEndpoint {data} />
    {:else if activeItem === 'Startpunt'}
      <MapAllRoutes {data} />
    {:else if activeItem === 'eindpunt'}
      <MapStartpoint {data} />
    {/if}
  </article>
</div>
