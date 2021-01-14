<script>
  import { VizHeader } from '@/components/atoms/elements/allElements.js'
  import { LineChart } from '@/components/atoms/charts/allCharts.js'

  export let title
  export let data
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

<div>
  <article>
    <VizHeader {title} />
    <LineChart {data} />
  </article>
</div>
