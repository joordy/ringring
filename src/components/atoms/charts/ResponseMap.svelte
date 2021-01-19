<script>
  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    const checkPreferedTheme = () => {
      let value = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (value === true) {
        return '#246BFD'
      } else {
        return '#EC4E4E'
      }
    }
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mggchn/ckjskozbj4rew19rsrmnn5nrd',
      center: [4.9, 52.38],
      zoom: 10.2,
    })
    map.on('load', function () {
      map.addSource('routes', {
        type: 'geojson',
        data: data.route,
      })
      map.addLayer({
        id: 'maine',
        type: 'line',
        source: 'routes',
        layout: {},
        paint: {
          'line-color': checkPreferedTheme(),
          'line-width': 4,
        },
      })
    })
  })
</script>

<style lang="scss">
  section {
    width: 100%;
    height: 100%;
    #map {
      box-shadow: none;
    }
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
