<script>
  let src = 'ringring-logo.svg'
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    width: 250px;
    height: 100vh;
    // background-color: #c4c4c4;
    border-right: 1px solid #c4c4c4;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    section {
      &:nth-of-type(1) {
        display: grid;
        place-items: center;
        padding: $margin2 0 $margin7 0;
        a {
          display: flex;
          text-decoration: none;
          color: black;
          img {
            width: 50px;
            height: 50px;
          }
          h1 {
            color: black;

            margin-left: 0.3em;
            font-size: 32px;
            line-height: 50px;
            font-weight: 700;
          }
        }
      }
      &:nth-of-type(2) {
        padding: 0% 10%;
        h2 {
          font-weight: 600;
        }
        nav {
          margin-top: 1em;
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
          >Statistics</a>
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
          >Statistieken</a>
        </li>
        <li>
          <a
            rel="prefetch"
            aria-current={segment === 'blog' ? 'page' : undefined}
            href="blog"
          >Feedback</a>
        </li>
      </ul>
    </nav>
  </section>
</header>
