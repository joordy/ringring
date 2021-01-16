<script>
  export let valueNumber
  export let compared
  export let timeStamp
  export let valueType

  let checkCompared = () => {
    compared
    let arr = compared.split('')
    let firstSymbol = arr[0]
    return firstSymbol
  }

  let symbol = checkCompared()
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h4 {
    span {
      margin-top: -$m5 !important;
      font-weight: $bold;
      &:nth-of-type(1) {
        font-size: $Heading1;
      }
      &:nth-of-type(2) {
        font-size: $Heading4;
      }
    }
  }
  h5 {
    font-weight: $semi-bold;
    margin: $m10 $m15 0 0;
    font-size: $Heading5;
    color: #a0aec0;
  }
  .positive {
    color: $ui-traffic-green;
  }
  .negative {
    color: $ui-traffic-red;
  }
</style>

<h4><span>{valueNumber}</span> <span>{valueType}</span></h4>

<h5>
  {#if symbol === '+'}
    <span class="positive">{compared}</span>
  {:else if symbol === '—'}<span class="negative">{compared}</span>{/if}
  Sinds
  {timeStamp}
</h5>
