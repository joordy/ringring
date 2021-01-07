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

  .statistieken {
    margin: $m30 $m50;
    width: calc(100% - 100px);
    h4 {
      margin-bottom: $m30;
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: $margin-30;
      article {
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
          height: 127px;
        }
        &:nth-of-type(4),
        &:nth-of-type(6) {
          height: 36vh;
        }
      }
      // #vizOne,
      // #vizTwo,
      // #vizThree {
      //   height: 117px;
      // }
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

<!-- <svelte:head>
  <title>Statistieken {title}-overzicht</title>
</svelte:head> -->

<section class="statistieken">
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
