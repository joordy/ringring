<script>
  export let data

  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'vorige maand'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  span {
    margin-top: -5px !important;
    font-weight: $bold;
    font-size: 32px;
  }
  h5 {
    margin-top: $m5;
    color: $ui-traffic-green;
  }
</style>

<span>{valuenumber}</span>
<h5>+{compared} t.o.v. {timestamp}</h5>
