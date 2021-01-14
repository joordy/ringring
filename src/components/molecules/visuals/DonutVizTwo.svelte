<script>
  import { VizHeader } from '@/components/atoms/elements/allElements.js'
  import { DonutChartTwo } from '@/components/atoms/charts/alLCharts.js'

  export let title
  export let data
  $: console.log(data)
  export let chartcolor
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: $borderS;
    article {
      width: calc(100% - 30px);
      height: calc(100% - 40px);
      padding: $m15 $m20;
    }
  }
</style>

<div id="barchart">
  <article class="barViz">
    <VizHeader {title} />
    <DonutChartTwo {data} {chartcolor} />
  </article>
</div>
