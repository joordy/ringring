<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  #container {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: $borderS;
    div {
      width: calc(100% - 30px);
      height: calc(100% - 40px);
      padding: $m15 $m20;
    }
  }
  @media (prefers-color-scheme: dark) {
    #container {
      box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.1),
        0 4px 10px 0 rgba(255, 255, 255, 0.1);
    }
  }
</style>

<article id="container">
  <div>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</article>
