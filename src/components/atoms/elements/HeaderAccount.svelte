<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    position: absolute;
    bottom: 75px;
    width: 100%;
    height: 48px;
    display: grid;
    place-items: center;
    a {
      width: 120px;
      text-align: center;
      text-decoration: none;
      font-family: FontAwesome;
      &::before {
        position: absolute;
        left: 45px;
        top: 0;
        font-weight: $normal;
        font-size: $Heading1;
        content: '\f2f5';
      }
    }
  }
  .closed {
    section {
      a {
        width: 100%;
        visibility: hidden;
        position: relative;
        padding: 0;
        &::after {
          width: calc(100% - 29px);
          height: 100%;
          display: block;
          visibility: visible;
          position: absolute;
          top: 0;
          font-size: $Heading4;
          left: 0;
          padding-left: 14px;
          // padding: 0 0 0 29px;
          content: '\f2f5';
        }
        &:hover::after {
          background-color: $ui-active-menu;
        }
      }
    }
  }
</style>

<section><a href="/">Uitloggen</a></section>
