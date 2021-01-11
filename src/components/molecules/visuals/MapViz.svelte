<script>
  import mapboxgl from 'mapbox-gl'
  import VizTitle from '@/components/atoms/VizHeader.svelte'
  import { onMount } from 'svelte'

  export let data
  export let title

  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mggchn/ckjo5w0az108z19qk4irrcxwm',
      center: [4.9, 52.38],
      zoom: 11.6,
    })
    map.on('load', function () {
      map.addSource('routes', {
        type: 'geojson',
        data: data,
      })
      map.addLayer({
        id: 'maine',
        type: 'line',
        source: 'routes',
        layout: {},
        paint: {
          'line-color': '#EC4E4E',
          'line-width': 2,
        },
      })
    })
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    article {
      padding: $margin-3 $margin-4;
      height: calc(100% - 30px);
      section {
        width: 100%;
        height: calc(100% - 40px);
      }
      #map {
        canvas {
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
  }
</style>

<svelte:head />

<div id="mapchart">
  <article class="mapViz">
    <VizTitle {title} />
    <section>
      <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
    </section>
  </article>
</div>
