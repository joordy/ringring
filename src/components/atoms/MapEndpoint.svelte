<script>
  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mggchn/ckjskozbj4rew19rsrmnn5nrd',
      center: [4.9, 52.38],
      zoom: 11.6,
    })
    // map.on('load', function () {
    //   map.addSource('routes', {
    //     type: 'geojson',
    //     data: data.charts.positionEnd,
    //   })
    //   map.addLayer({
    //     id: 'points',
    //     type: 'symbol',
    //     source: 'routes',
    //     layout: {
    //       'text-field': ['get', 'title'],
    //       'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    //       'text-offset': [0, 1.25],
    //       'text-anchor': 'top',
    //     },
    //   })
    // })
    // data.charts.positionEnd.features.forEach(function (marker) {
    //   // create a HTML element for each feature
    //   var el = document.createElement('div')
    //   el.className = 'marker'

    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el)
    //     .setLngLat(marker.geometry.coordinates)
    //     .setPopup(
    //       new mapboxgl.Popup({ offset: 25 }) // add popups
    //         .setHTML(
    //           '<h3>' +
    //             marker.properties.title +
    //             '</h3><p>' +
    //             marker.properties.description +
    //             '</p>'
    //         )
    //     )
    //     .addTo(map)
    // })
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
  .marker {
    background-image: url('marker.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    cursor: pointer;
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
