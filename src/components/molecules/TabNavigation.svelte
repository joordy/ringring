<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  nav {
    position: absolute;
    bottom: 0;
    ul {
      margin-left: $m50;
      width: 250px;
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        span {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          display: block;
          padding-bottom: $m5;
          cursor: pointer;
        }
      }
      li.active {
        span {
          color: $ui-traffic-red;
          border-bottom: 4px solid $ui-traffic-red;
          font-weight: $bold;
          @include darkMode {
            color: $darkui-blue;
            border-bottom: 4px solid $darkui-blue;
          }
        }
      }
      li.disabled {
        span {
          color: $ui-grey;
        }
      }
    }
  }
</style>

<nav>
  <ul>
    <li class="disabled"><span>Dag</span></li>
    <li class="disabled"><span>Week</span></li>
    <li class="active"><span>Maand</span></li>
    <li class="disabled"><span>Jaar</span></li>
  </ul>
</nav>
