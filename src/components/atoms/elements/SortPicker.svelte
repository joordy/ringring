<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    margin-right: $m30;
    h4 {
      margin-bottom: $m30;
      line-height: $Heading3;
      &:before {
        font-family: FontAwesome;
        content: '\f0dc';
        font-size: $Heading3;
        color: $ui-red;
        margin-right: $m5;
        @include darkMode {
          color: $darkui-blue;
        }
      }
    }
  }
</style>

<div class="sortOn">
  <h4>Sorteren op</h4>
</div>
