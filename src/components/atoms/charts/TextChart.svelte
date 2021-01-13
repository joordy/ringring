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

  h5 {
    span {
      margin-top: -5px !important;
      font-weight: $bold;
      &:nth-of-type(1) {
        font-size: 32px;
      }
      &:nth-of-type(2) {
        font-size: 20px;
      }
    }
  }
  h6 {
    font-weight: 500;
    margin-top: $m10;
    font-size: 16px;
  }
  .positive {
    color: $ui-traffic-green;
  }
  .negative {
    color: $ui-traffic-red;
  }
</style>

<h5><span>{valueNumber}</span> <span>{valueType}</span></h5>
{#if symbol === '+'}
  <h6 class="positive">{compared} t.o.v. {timeStamp}</h6>
{:else if symbol === '—'}
  <h6 class="negative">{compared} t.o.v. {timeStamp}</h6>
{/if}
