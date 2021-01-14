<script>
  import { VizHeader } from '@/components/atoms/elements/allElements.js'
  import { TextChart } from '@/components/atoms/charts/allCharts.js'

  export let title
  export let valueNumber
  export let compared
  export let timeStamp
  export let valueType
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
      padding: $m15 $m20;
    }
  }
</style>

<div>
  <article>
    <VizHeader {title} />
    <TextChart {valueNumber} {compared} {timeStamp} {valueType} />
  </article>
</div>
