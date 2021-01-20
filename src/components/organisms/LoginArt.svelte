<script>
  let src = 'assets/images/overview.png'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 100%;
    background-color: $ui-red;
    display: grid;
    place-items: center;
    overflow: hidden;
    @include darkMode {
      background-color: $darkui-softblack;
    }
    section {
      width: 80%;
      margin: 0 auto;
      color: $ui-white;
      h2 {
        margin: 0 0 $m20 0;
        font-weight: $normal;
        font-size: 20px;
      }
      h3 {
        margin: 0;
        font-size: 32px;
        line-height: $m50;
        font-weight: $extra-bold;
        span {
          display: block;
        }
      }
      div {
        height: 60vh;
        width: 100%;
        position: relative;
      }
      img {
        position: absolute;
        left: 0;
        right: 0;
        margin-top: $m100;
        opacity: 0.4;
        width: 160%;
        height: auto;
      }
    }
  }
</style>

<article>
  <section>
    <h2>Up-to-Data</h2>
    <h3>
      <span>Alle fietsdata op één plek —</span>
      <span> waar fietsers en beleidsmakers bijeenkomen. </span>
    </h3>
    <div><img {src} alt="" /></div>
  </section>
</article>
