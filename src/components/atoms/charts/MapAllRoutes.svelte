<script>
  // Imports theme checkers
  // import { checkPreferedTheme } from '@/utils/helpers/preferedTheme.js'

  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  const checkPreferedTheme = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return '#246BFD'
    } else {
      return '#EC4E4E'
    }
  }
  const checkPreferedMap = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return 'mapbox://styles/mggchn/ckk5inqzb6eei17sibteghrqs'
    } else {
      return 'mapbox://styles/mggchn/ckjskozbj4rew19rsrmnn5nrd'
    }
  }

  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: checkPreferedMap(),
      center: [4.9, 52.38],
      zoom: 11.6,
    })
    map.on('load', function () {
      map.addSource('routes', {
        type: 'geojson',
        data: data.geojson,
      })
      map.addLayer({
        id: 'maine',
        type: 'line',
        source: 'routes',
        layout: {},
        paint: {
          'line-color': checkPreferedTheme(),
          'line-width': 2,
          'line-opacity': 0.25,
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
    }
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
