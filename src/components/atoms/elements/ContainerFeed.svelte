<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  #containerFeed {
    width: 200%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: $borderS;
    overflow-x: hidden;
    overflow-y: scroll;
    @include darkMode {
      box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.1),
        0 4px 10px 0 rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &:-webkit-scrollbar-track {
      background: $ui-grey;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $ui-red;
      border-radius: $borderXL;
      border: 1px solid $ui-softwhite;
    }
    @include darkMode {
      &:-webkit-scrollbar-track {
        background: $darkui-grey;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $darkui-blue;
        border: 1px solid $darkui-grey;
      }
    }
    div {
      width: calc(100% - 30px);
      height: calc(100% - 20px);
      padding: $m15 $m20;
    }
  }
</style>

<div id="containerFeed">
  <div>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>
