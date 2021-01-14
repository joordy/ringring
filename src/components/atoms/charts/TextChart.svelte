<script>
  import { onMount } from 'svelte'

  // export let data
  export let valueNumber
  export let compared
  export let timeStamp
  export let valueType

  // let valuenumber = '15'
  // let compared = '20%'
  // let timestamp = 'vorige maand'

  let checkCompared = () => {
    compared
    let arr = compared.split('')
    let firstSymbol = arr[0]
    return firstSymbol
  }

  let symbol = checkCompared()

  // onMount(checkCompared)
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
    margin-top: $m10;
    font-size: $Heading5;
  }
  .positive {
    color: $ui-traffic-green;
  }
  .negative {
    color: $ui-traffic-red;
  }
</style>

<h4><span>{valueNumber}</span> <span>{valueType}</span></h4>
{#if symbol === '+'}
  <h5 class="positive">{compared} t.o.v. {timeStamp}</h5>
{:else if symbol === '—'}
  <h5 class="negative">{compared} t.o.v. {timeStamp}</h5>
{/if}
