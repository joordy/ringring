<script>
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    nav {
      ul {
        height: 180px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 100%;
          height: 50px;
          position: relative;
          a {
            padding: 0 0 0 $m80;
            display: block;
            line-height: 50px;
            text-decoration: none;
            font-family: FontAwesome;
            &::before {
              position: absolute;
              left: $m30;
              font-weight: 300;
              font-size: $Heading3;
            }
            &:hover {
              background-color: $ui-active-menu;
            }
          }
          .active {
            background-color: $ui-active-menu;
          }
          &:nth-of-type(1) {
            a {
              &::before {
                content: '\f080';
              }
            }
          }
          &:nth-of-type(2) {
            a {
              &::before {
                content: '\f4ad';
              }
            }
          }
          &:nth-of-type(3) {
            a {
              &::before {
                content: '\f4ad';
              }
            }
          }
          &:nth-of-type(4) {
            a {
              &::before {
                content: '\f080';
              }
            }
          }
        }
      }
    }
  }
  .closed {
    section {
      nav {
        ul {
          li {
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
                padding: 0 0 0 $m30;
                content: '';
              }
              &:hover::after {
                background-color: $ui-active-menu;
              }
            }
            .active::after {
              background-color: $ui-active-menu;
            }
            &:nth-of-type(1) {
              a {
                &::after {
                  content: '\f080';
                }
              }
            }
            &:nth-of-type(2) {
              a {
                &::after {
                  content: '\f4ad';
                }
              }
            }
            &:nth-of-type(3) {
              a {
                &::after {
                  content: '\f4ad';
                }
              }
            }
            &:nth-of-type(4) {
              a {
                &::after {
                  content: '\f080';
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<section>
  <nav>
    <ul>
      <li>
        <a
          aria-current={segment === 'statistics' ? 'page' : undefined}
          href="statistics"
          class={segment === 'statistics' ? 'active' : ''}
        >Statistieken</a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'feedback' ? 'page' : undefined}
          href="feedback"
          class={segment === 'feedback' ? 'active' : ''}
        >Feedback</a>
      </li>
      <li>
        <a
          aria-current={segment === 'contact' ? 'page' : undefined}
          href="contact"
          class={segment === 'contact' ? 'active' : ''}
        >Contact</a>
      </li>
    </ul>
  </nav>
</section>
