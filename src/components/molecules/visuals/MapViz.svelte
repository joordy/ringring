<script>
  import { onMount } from 'svelte'
  export let title
  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/jorrr/ckj8onwgm3fr019mwtof7ylln',
      center: [4.9, 52.38],
      zoom: 10.7,
    })
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    article {
      margin: $margin-3 $margin-4;
      h4 {
        color: #c4c4c4;
        margin-bottom: $margin1;
      }
      #map {
        max-width: 100%;
        max-height: 100%;
        canvas {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
</style>

<svelte:head />

<div id="mapchart">
  <article class="mapViz">
    <h4>{title}</h4>
    <div id="map" style="width: 100%; height: 645px; border-radius: 5px;" />
  </article>
</div>
