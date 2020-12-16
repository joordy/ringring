<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-size: $h3-size;
    margin: 0 0 $margin2 0;
  }
  nav {
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
    ul {
      display: flex;
      li {
        list-style: none;
        width: auto;
        margin: 0 1em;
        &:nth-of-type(1) {
          // padding-left: 0;
          font-weight: 700;
          border-bottom: 2px solid black;
        }
      }
    }
  }
</style>

<h3>Overzicht</h3>

<nav>
  <ul>
    <li>Dag</li>
    <li>Week</li>
    <li>Maand</li>
    <li>Jaar</li>
  </ul>
</nav>
