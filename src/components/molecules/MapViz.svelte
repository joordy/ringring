<script>
  import { onMount } from 'svelte'
  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    let map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      style: 'mapbox://styles/jorrr/ckj8onwgm3fr019mwtof7ylln',
      center: [4.9, 52.38], // starting position [lng, lat]
      zoom: 10.7, // startig zoom
    })
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    div {
      #map {
        width: 100%;
        height: 100%;
        canvas {
          height: 100%;
        }
      }
    }
  }
</style>

<svelte:head />

<article>
  <div>
    <div id="map" style="width: 100%; height: 460px;" />
  </div>
</article>
