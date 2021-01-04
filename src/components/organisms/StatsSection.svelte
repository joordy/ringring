<script>
  import {
    SmallViz,
    MapViz,
    BarViz,
    LineViz,
  } from '@/components/molecules/visuals/visuals.js'

  export let activeTabValue
  export let title
  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    h4 {
      margin-bottom: $margin30;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: $margin30;
      grid-auto-rows: minmax(100px, auto);
      #vizFour {
        grid-column: 4;
        grid-row: 1 / 3;
      }
      #vizFive {
        grid-column: 1 / 4;
        grid-row: 2 / 6;
      }
      #vizSix {
        grid-column: 4;
        grid-row: 3 / 6;
      }
    }
  }
</style>

<svelte:head>
  <title>Statistieken {title}-overzicht</title>
</svelte:head>

<section>
  <h4>16 december 2020</h4>
  <section class="gridWrapper">
    <article id="vizOne">
      <SmallViz title="Aantal fietsers" />
    </article>
    <article id="vizTwo">
      <SmallViz title="Aantal fietsritten" />
    </article>
    <article id="vizThree">
      <SmallViz title="Gemiddeld duur fietsrit" />
    </article>
    <article id="vizFour">
      <BarViz title="Fietsritten in verhouding met afstand" />
    </article>
    <article id="vizFive">
      <MapViz title="Gemaakte fietsritten" />
    </article>
    <article id="vizSix">
      <LineViz title="Drukte gedurende de dag" />
    </article>
  </section>
</section>
