<script>
  import {
    SmallViz,
    MapViz,
    BarViz,
    LineViz,
  } from '@/components/molecules/visuals/allVisuals.js'

  import { StatFilter } from '@/components/molecules/elements/allElements.js'

  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .statistieken {
    background-color: $ui-softwhite;
    padding: $m30 $m50;
    width: calc(100% - 100px);
    height: 100%;
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: $m30;
      article {
        background-color: white;
        &:nth-of-type(4),
        &:nth-of-type(5) {
          height: 135px;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          height: 32vh;
          @media screen and (min-height: 850px) {
            height: 34.5vh;
          }
          @media screen and (min-height: 1000px) {
            height: 37vh;
          }
          @media screen and (min-height: 1100px) {
            height: 39vh;
          }
        }
      }
      #vizOne {
        grid-column: 1 / 3;
        grid-row: 1 / 5;
      }
      #vizTwo {
        grid-column: 3;
        grid-row: 1 / 4;
      }
      #vizThree {
        grid-column: 3;
        grid-row: 4 / 6;
      }
    }
  }
</style>

<section class="statistieken">
  <StatFilter />
  <section class="gridWrapper">
    <article id="vizOne">
      <MapViz title="Gemaakte fietsritten" {data} />
    </article>
    <article id="vizTwo">
      <BarViz title="Fietsritten in verhouding met afstand" {data} />
    </article>
    <article id="vizThree">
      <LineViz title="Drukte gedurende de dag" {data} />
    </article>
    <article id="vizFour">
      <SmallViz
        title="Aantal fietsritten"
        valueNumber={data.dataset.features.length}
        compared="+ 5.4%"
        timeStamp="vorige maand"
        valueType="ritten"
      />
    </article>
    <article id="vizFive">
      <SmallViz
        title="Gemiddelde duur fietsrit"
        valueNumber="20"
        compared="— 20%"
        timeStamp="vorige maand"
        valueType="min"
      />
    </article>
  </section>
</section>
