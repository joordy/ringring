<script>
  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  const calculateDay = (input) => {
    let day = new Date(input)
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/')
    return day
  }

  const checkPreferedTheme = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return '#246BFD'
    } else {
      return '#EC4E4E'
    }
  }

  onMount(() => {
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
    let popup = new mapboxgl.Popup({
      closeButton: false,
      className: 'DitIsEenPopup',
    })
    map.on('mousemove', 'maine', function (e) {
      map.getCanvas().style.cursor = 'pointer'
      let feature = e.features[0]
      popup
        .setLngLat([4.9, 52.38])
        // .setHTML(
        //   `  <h4 style="font-weight: 700;"">Rit informatie:</h4>
        //   <p>
        //     <span style="font-weight: 700; width: 50px;">Afstand:</span>
        //     ${data.route.properties.distance} km
        //   </p>
        //   <br>
        //   <p>
        //     <span style="font-weight: 700; width: 50px;">Beweegtijd:</span>
        //     ${data.route.properties.duration} min.
        //   </p>
        //   <br>
        //   <p>
        //     <span style="font-weight: 700; width: 50px;">Dag:</span>
        //     ${data.route.properties.day}
        //   </p>`
        // )
        .setHTML(
          `<h4 style="font-weight: 600;"">Rit informatie:</h4>
            Afstand:   ${data.route.properties.distance} KM
            <br>
            Beweegtijd:${data.route.properties.duration} Min.
            <br>
            Datum:     ${calculateDay(data.route.properties.day)}
            <br>`
        )
        .addTo(map)
    })
    map.on('mouseleave', 'maine', function () {
      map.getCanvas().style.cursor = ''
      popup.remove()
    })
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    height: 100%;
    #map {
      box-shadow: none;
      color: black;
    }
  }
</style>

<section>
  <div id="map" style="width: 100%; height: 100%; border-radius: 5px;" />
</section>
