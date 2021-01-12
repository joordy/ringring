<script>
  let src = 'ringring-logo.svg'
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    height: 100vh;
    width: 250px;
    background-color: $ui-dark-blue;
    color: $text-soft-white;
    border-radius: 0 30px 30px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    section {
      &:nth-of-type(1) {
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
      &:nth-of-type(2) {
        width: 100%;
        nav {
          ul {
            height: 300px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
              width: 100%;
              height: 50px;
              position: relative;
              a {
                padding: 0 0 0 80px;
                display: block;
                line-height: 50px;
                text-decoration: none;
                font-family: FontAwesome;
                &::before {
                  position: absolute;
                  left: 30px;
                  font-weight: 300;
                  font-size: 24px;
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
      &:nth-of-type(3) {
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
            font-weight: 300;
            font-size: 32px;
            content: '\f2f5';
          }
        }
      }
    }
  }

  .nav-collapse {
    width: 80px;
    section {
      &:nth-of-type(1) {
        a {
          img {
            width: 50px;
          }
          h1 {
            display: none;
          }
        }
      }
      &:nth-of-type(2) {
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
                  font-size: 20px;
                  left: 0;
                  padding: 0 0 0 29px;
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
  }
  button {
    position: absolute;
    top: 50px;
    right: -28px;
    width: 28px;
    height: 50px;
    background-color: $ui-dark-blue;
    border: none;
    border-radius: 0 5px 5px 0;
    &::after {
      color: $text-soft-white;
      font-family: FontAwesome;
      content: '\f104';
      font-size: 20px;
    }
  }
</style>

<header class="nav nav-collapse">
  <!-- <header id="navigation" class="nav"> -->
  <!-- <button on:click={onMount} /> -->
  <section>
    <a aria-current={segment === undefined ? 'page' : undefined} href="/">
      <img {src} alt="RingRing Logo" />
      <h1>Ring-Ring</h1></a>
  </section>

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
            aria-current={segment === 'about' ? 'page' : undefined}
            href="about"
            class={segment === 'about' ? 'active' : ''}
          >Contact</a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === 'blog' ? 'page' : undefined}
            href="blog"
            class={segment === 'blog' ? 'active' : ''}
          >Lorem Ipsum 2</a>
        </li>
      </ul>
    </nav>
  </section>

  <section><a href="/">Uitloggen</a></section>
</header>
