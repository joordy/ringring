<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  #containerMap {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: $borderS;
    div {
      width: calc(100% - 30px);
      height: calc(100% - 40px);
      padding: $m15 $m20;
      position: relative;
    }
  }
</style>

<article id="containerMap">
  <div>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</article>
