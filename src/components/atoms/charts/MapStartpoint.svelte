<script>
  // Imports theme checkers
  // import { checkPreferedTheme } from '@/utils/helpers/preferedTheme.js'

  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  let dark = '#246BFD'
  let light = '#EC4E4E'

  const checkPreferedTheme = (dark, light) => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return dark
    } else {
      return light
    }
  }

  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mggchn/ckjskozbj4rew19rsrmnn5nrd',
      center: [4.9, 52.38],
      zoom: 11.6,
    })

    map.on('load', () => {
      map.addSource('points', {
        type: 'geojson',
        data: data.charts.positionStart,
      })
      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        layout: {},
        paint: {
          'circle-color': checkPreferedTheme(dark, light),
        },
      })
    })
  })
</script>

<style lang="scss">
  section {
    width: 100%;
    height: calc(100% - 20px);
    #map {
      box-shadow: none;
      // canvas {
      //   max-height: 100%;
      //   max-width: 100%;
      // }
    }
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
