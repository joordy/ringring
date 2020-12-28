<script>
  import SmallViz from '@/components/molecules/SmallViz.svelte'
  import MapViz from '@/components/molecules/MapViz.svelte'
  export let activeTabValue
  export let title
</script>

<style lang="scss">
  section {
    width: 100%;
    .gridWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: 16px;
      grid-auto-rows: minmax(100px, auto);
      #vizFour {
        grid-column: 4;
        grid-row: 1 / 4;
      }
      #vizFive {
        grid-column: 1 / 4;
        grid-row: 2 / 5;
      }
      #vizSix {
        grid-column: 1 / 4;
        grid-row: 5 / 8;
      }
      #vizSeven {
        grid-column: 4;
        grid-row: 4 / 8;
      }
    }
  }
</style>

<svelte:head>
  <title>Feedback {title}-overzicht</title>
</svelte:head>
<section>
  <h4>16 december 2020</h4>
  <article class="gridWrapper">
    <div id="vizOne">
      <SmallViz />
    </div>
    <div id="vizTwo">
      <SmallViz />
    </div>
    <div id="vizThree">
      <SmallViz />
    </div>
    <div id="vizFour">
      <SmallViz />
    </div>
    <div id="vizFive">
      <SmallViz />
    </div>
    <div id="vizSix">
      <SmallViz />
    </div>
    <div id="vizSeven">
      <MapViz />
    </div>
  </article>
</section>
