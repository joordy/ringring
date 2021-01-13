<script>
  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    let mapPoint = 'mapPoint.png'

    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mggchn/ckjskozbj4rew19rsrmnn5nrd',
      center: [4.9, 52.38],
      zoom: 11.6,
    })

    map.on('load', function () {
      map.loadImage(mapPoint, function (error, image) {
        if (error) throw error
        map.addImage('custom-marker', image)
        map.addSource('points', {
          type: 'geojson',
          data: data.charts.positionStart,
        })
        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: 'points',
          layout: {
            'icon-image': 'custom-marker',
          },
        })
      })
    })
  })
</script>

<style lang="scss">
  section {
    width: 100%;
    height: calc(100% - 40px);
    #map {
      box-shadow: none;
      canvas {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
