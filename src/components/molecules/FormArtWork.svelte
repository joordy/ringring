<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: 480px;
    max-width: 600px;
    margin: 10vh auto 20vh auto;
    article {
      position: relative;
      height: inherit;
      div {
        position: absolute;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 195px;
          height: 195px;
          background-color: #c4c4c4;
          opacity: 0.2;
          z-index: 1;
        }
        &:nth-of-type(2) {
          z-index: 2;
          width: 430px;
          height: 480px;
          background-color: white;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
        }
        &:nth-of-type(1) {
          right: 0;
          top: -50px;
        }
        &:nth-of-type(3) {
          left: 0;
          bottom: -50px;
        }
      }
    }
  }
</style>

<section>
  <article>
    <div />
    <div />
    <div />
  </article>
</section>
