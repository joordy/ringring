<script>
  import { FeedbackFilter } from '@/components/molecules/elements/allElements.js'
  import {
    FeedbackViz,
    DonutViz,
    DonutVizTwo,
  } from '@/components/molecules/visuals/allVisuals.js'
  export let data

  let donutChartOne = [
    'rgba(129, 30, 30, 1)',
    'rgba(164, 46, 46, 1)',
    'rgba(199, 53, 53, 1)',
    'rgba(233, 62, 62, 1)',
    'rgba(239, 102, 102, 1)',
    'rgba(243, 16, 19, 1)',
    'rgba(248, 161, 161, 1)',
    'rgba(242, 193, 193, 1)',
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
        title="Verdeling feedback per tags"
      />
    </article>
    <article id="vizThree">
      <DonutVizTwo
        data={data.charts.feedbackLocationChart}
        chartcolor={donutChartOne}
        title="Feedback per stadsdeel"
      />
    </article>
  </section>
</section>
