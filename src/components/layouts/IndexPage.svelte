<script>
  import successkid from 'images/successkid.jpg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  // header {
  //   display: none;
  // }
  // h1,
  // figure,
  // p {
  //   text-align: center;
  //   margin: 0 auto;
  // }

  // h1 {
  //   font-size: $h2-size;
  //   text-transform: uppercase;
  //   font-weight: 700;
  //   margin: 0 0 $margin-2 0;
  // }
  // @media (min-width: 480px) {
  //   h1 {
  //     font-size: $h1-size;
  //   }
  // }
  section {
    display: grid;
    grid-template-columns: 2fr 3fr;
    article {
      &:nth-of-type(1) {
        background-color: white;
      }
      &:nth-of-type(2) {
        background-color: $ui-dark-blue;
      }
    }
  }
</style>

<section>
  <article>
    <h1>Hello</h1>
  </article>
  <article>
    <h1>Hello</h1>
  </article>
</section>
<!-- <h1>Great success!</h1> -->
