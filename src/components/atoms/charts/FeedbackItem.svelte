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
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 95%;
    margin: $m30 auto $m30 auto;
    border-bottom: 1px solid #c4c4c4;
    border-radius: $borderS;
    display: grid;
    grid-template-columns: 4.7fr 2.3fr;
    grid-gap: $m30;
    .text {
      width: 100%;
      .tags {
        display: flex;
        height: 40px;
        h4 {
          height: 100%;
          margin: 0em $m15 0em 0em;
          border: 1px solid $ui-grey;
          border-radius: $borderS;
          font-size: 14px;
          line-height: 40px;
          padding: 0px $m15;
        }
      }
      p {
        font-size: 1em;
        margin: $m15 0;
      }
      .timestamp {
        margin-bottom: $m15;
        h5 {
          margin-top: $m20;
          font-size: 12px;
          color: $ui-grey;
        }
      }
    }
    .image {
      div {
        margin-left: -10%;
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
    <div id="map" style="width: 110%; height: 90%;" />
  </article>
</section>
