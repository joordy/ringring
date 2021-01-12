<script>
  import mapboxgl from 'mapbox-gl'
  import { onMount } from 'svelte'

  export let data

  let createMap = () => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoiam9ycnIiLCJhIjoiY2tpcDE0bGoyMDJlMzJzcDlwZGI3bzFsOCJ9._J-m2YnN8Bmv2kEA99rZFg'
    let map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/jorrr/ckj8onwgm3fr019mwtof7ylln',
      style: 'mapbox://styles/mggchn/ckjo5w0az108z19qk4irrcxwm',
      center: [4.9, 52.38],
      zoom: 10.6,
    })
  }

  onMount(createMap)
  // onMount(() => {
  //   createMap()
  // })
</script>

<style lang="scss">
  section {
    width: 95%;
    height: 150px;
    margin: 2em auto 0.9em auto;
    border-bottom: 1px solid #c4c4c4;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-gap: 30px;
    .text {
      width: 100%;
      .tags {
        display: flex;
        height: 28px;
        h4 {
          height: 100%;
          margin: 0em 1em 1em 0em;
          border: 1px solid #c4c4c4;
          border-radius: 3px;
          font-size: 14px;
          line-height: 28px;
          padding: 5px 14px;
        }
      }
      p {
        font-size: 1em;
      }
      .timestamp {
        h5 {
          margin-top: 20px;
          font-size: 12px;
          color: #c4c4c4;
        }
      }
    }
    .image {
      div {
        margin-left: -20%;
      }
    }
  }
</style>

<section>
  <article class="text">
    <div class="tags">
      {#each data.feedbackTag as item}
        <h4>#{item}</h4>
      {/each}
    </div>
    <p>{data.feedback}</p>
    <div class="timestamp">
      <h5>12 minuten geleden</h5>
    </div>
  </article>
  <article class="image">
    <div id="map" style="width: 120%; height: 90%;" />
  </article>
</section>
