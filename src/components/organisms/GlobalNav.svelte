<script>
  let src = 'ringring-logo.svg'
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    width: 300px;
    height: 100vh;
    background-color: #151f32;
    color: #f1f3f6;
    border-radius: 0 40px 40px 0;
    // border-right: 1px solid #c4c4c4;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    section {
      &:nth-of-type(1) {
        display: grid;
        place-items: center;
        padding: $margin-8 0 8em 0;
        a {
          display: flex;
          text-decoration: none;
          img {
            width: 30px;
            height: 30px;
          }
          h1 {
            margin-left: $margin-1;
            font-size: $h3-size;
            line-height: 30px;
            font-weight: $bold;
          }
        }
      }
      &:nth-of-type(2) {
        padding: 0% 10%;
        h2 {
          font-weight: $bold;
        }
        nav {
          margin-top: $margin-3;
          ul {
            li {
              list-style: none;
              a {
                transition: 0.2s;
                &:hover {
                  color: orange;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<header>
  <section>
    <a aria-current={segment === undefined ? 'page' : undefined} href="/"><img
        {src}
        alt="RingRing Logo"
      />
      <h1>Ring-Ring</h1></a>
  </section>

  <section>
    <h2>Dashboard</h2>
    <nav>
      <ul>
        <li />
        <li>
          <a
            aria-current={segment === 'statistics' ? 'page' : undefined}
            href="statistics"
          >Statistieken</a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === 'feedback' ? 'page' : undefined}
            href="feedback"
          >Feedback</a>
        </li>
        <li>
          <a
            aria-current={segment === 'about' ? 'page' : undefined}
            href="about"
          >Lorem Ipsum 1</a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === 'blog' ? 'page' : undefined}
            href="blog"
          >Lorem Ipsum 2</a>
        </li>
      </ul>
    </nav>

    <a href="/"> LogOut</a>
  </section>
</header>
