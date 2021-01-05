<script>
  let src = 'ringring-logo.svg'
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin: $margin-30 0 $margin-100 0;
    display: grid;
    place-items: center;
    a {
      display: flex;
      color: $text-soft-white;
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
