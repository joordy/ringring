<script>
  import { FeedbackFilter } from '@/components/molecules/elements/allElements.js'
  import {
    FeedbackViz,
    DonutViz,
    DonutVizTwo,
  } from '@/components/molecules/visuals/allVisuals.js'
  export let data

  let donutChartOne = [
    'rgba(236, 78, 78, 1)',
    'rgba(249, 206, 206, 1)',
    'rgba(142, 84, 84, 1)',
    'rgba(64, 51, 51, 1)',
    'rgba(150, 42, 42, 1)',
    'rgba(54, 7, 7, 1)',
    'rgba(91, 36, 36, 1)',
    'rgba(182, 0, 0, 1)',
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .feedback {
    background-color: $ui-softwhite;
    padding: $m30 $m50;
    width: calc(100% - 100px);
    height: 100%;
    section {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: $m30;
      grid-template-rows: 15vh 15vh 15vh 15vh;
      article {
        background-color: white;
        &:nth-of-type(1) {
          grid-column: 1;
          grid-row: 1 / 5;
        }
        &:nth-of-type(2) {
          grid-column: 2;
          grid-row: 1 / 3;
        }
        &:nth-of-type(3) {
          grid-column: 2;
          grid-row: 3 / 5;
        }
      }
    }
  }
</style>

<section class="feedback">
  <FeedbackFilter {data} />
  <section class="gridWrapper">
    <article id="vizOne">
      <FeedbackViz {data} />
    </article>
    <article id="vizTwo">
      <DonutViz
        data={data.charts.subjectChart}
        chartcolor={donutChartOne}
        title="Hoe is de feedback verdeeld"
      />
    </article>
    <article id="vizThree">
      <DonutVizTwo
        data={data.charts.feedbackLocationChart}
        chartcolor={donutChartOne}
        title="Uit welk stadsdeel komt de feedback?"
      />
    </article>
  </section>
</section>
