<script>
  let src = 'ringring-logo.svg'
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: $m30 0 $m100 0;
    height: 48px;
    display: grid;
    place-items: center;
    a {
      display: flex;
      color: $ui-black;
      text-decoration: none;
      img {
        width: 48px;
      }
      h1 {
        line-height: 48px;
        margin-left: $margin-10;
        font-size: 28px;
        font-weight: $bold;
      }
    }
  }
  .closed {
    section {
      a {
        img {
          width: 50px;
        }
        h1 {
          display: none;
        }
      }
    }
  }
</style>

<section>
  <a aria-current={segment === undefined ? 'page' : undefined} href="/">
    <img {src} alt="RingRing Logo" />
    <h1>Ring-Ring</h1></a>
</section>
