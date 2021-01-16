<script>
  import {
    BarChart,
    LineChart,
    MapAllRoutes,
    MapEndpoint,
    MapStartpoint,
    RecapStats,
  } from '@/components/atoms/charts/allElements.js'

  import {
    Container,
    ContainerMap,
    MapTabs,
    VizHeader,
  } from '@/components/atoms/elements/allElements.js'

  import { StatFilter } from '@/components/molecules/allElements.js'

  export let data

  let items = ['Alle routes', 'Startpunt', 'Eindpunt']
  let activeItem = 'Alle routes'
  let tabChange = (e) => (activeItem = e.detail)
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
      // grid-template-rows: 9vh 9vh 8vh 14vh 6vh 157px;
      grid-gap: $m30;
      article {
        background-color: white;
        &:nth-of-type(1) {
          grid-column: 1 / 3;
          grid-row: 1 / 5;
        }
        &:nth-of-type(2) {
          grid-column: 3;
          grid-row: 1 / 4;
        }
        &:nth-of-type(3) {
          grid-column: 3;
          grid-row: 4 / 7;
        }
        &:nth-of-type(4) {
          grid-column: 1;
          grid-row: 5 / 7;
          height: 130px;
        }
        &:nth-of-type(5) {
          grid-column: 2;
          grid-row: 5 / 7;
          height: 130px;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          height: 32vh;
          @media screen and (min-height: 850px) {
            height: 34.5vh;
          }
          @media screen and (min-height: 1000px) {
            height: 35vh;
          }
          @media screen and (min-height: 1100px) {
            height: 37vh;
          }
        }
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    .statistieken {
      background-color: #1f1f2c;
      color: #fff;
      section {
        article {
          background-color: #181826;
          color: #fff;
        }
      }
    }
  }
</style>

<section class="statistieken">
  <StatFilter />
  <section class="gridWrapper">
    <article id="vizOne">
      <ContainerMap>
        <VizHeader title="Gemaakte fietsritten" />
        <MapTabs {activeItem} {items} on:tabChange={tabChange} />

        {#if activeItem === 'Alle routes'}
          <MapAllRoutes {data} />
        {:else if activeItem === 'Startpunt'}
          <MapStartpoint {data} />
        {:else if activeItem === 'Eindpunt'}
          <MapEndpoint {data} />
        {/if}
      </ContainerMap>
    </article>
    <article id="vizTwo">
      <Container>
        <VizHeader title="Fietsritten in verhouding met afstand" />
        <BarChart {data} />
      </Container>
    </article>
    <article id="vizThree">
      <Container>
        <VizHeader title="Drukte gedurende de dag" />
        <LineChart {data} />
      </Container>
    </article>
    <article id="vizFour">
      <Container>
        <VizHeader title="Aantal fietsritten" />
        <RecapStats
          valueNumber={data.dataset.features.length}
          compared="+ 5.4%"
          timeStamp="vorige maand"
          valueType="ritten"
        />
      </Container>
    </article>
    <article id="vizFive">
      <Container>
        <VizHeader title="Gemiddelde duur fietsrit" />
        <RecapStats
          valueNumber={data.charts.avgTrip.toFixed(2)}
          compared="— 20%"
          timeStamp="vorige maand"
          valueType="min"
        />
      </Container>
    </article>
  </section>
  <!-- <CopyRight /> -->
</section>
