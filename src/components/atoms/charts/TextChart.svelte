<script>
  // export let data
  export let valueNumber
  export let compared
  export let timeStamp
  export let valueType

  // let valuenumber = '15'
  // let compared = '20%'
  // let timestamp = 'vorige maand'
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
    font-weight: $bold;
    margin-top: $m5;
    color: $ui-traffic-green;
  }
</style>

<h5><span>{valueNumber}</span> <span>{valueType}</span></h5>
<h6>{compared} t.o.v. {timeStamp}</h6>
