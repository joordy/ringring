<script>
  import SmallViz from '@/components/molecules/visuals/SmallViz.svelte'
  import MapViz from '@/components/molecules/visuals/MapViz.svelte'
  import BarViz from '@/components/molecules/visuals/BarViz.svelte'
  export let activeTabValue
  export let title
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    h4 {
      margin-bottom: $margin30;
    }
    article {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: $margin30;
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
  <title>Statistieken {title}-overzicht</title>
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
      <BarViz />
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
