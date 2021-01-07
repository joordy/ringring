<script>
  import {
    Contact,
    DashNav,
    Feedback,
    Stats,
  } from '@/components/templates/all-items.js'

  export let segment
  export let data

  let src = 'ringring-logo.svg'
  let navClosed = false
  let activeTabValue
  let currentDashboardTab
  let dashboardTabs = [
    { label: 'Statistieken', value: 1 },
    { label: 'Feedback', value: 2 },
    { label: 'Contact', value: 3 },
  ]

  function handleNav(e) {
    navClosed = !navClosed
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    height: 100%;
    width: 250px;
    background-color: $ui-white;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #c4c4c4;
    position: fixed;
    left: 0;
    z-index: 2;
    overflow-x: hidden;
    transition: 0.5s;
    .logo {
      margin: $margin-30 0 $margin-100 0;
      display: grid;
      place-items: center;
      a {
        display: flex;
        color: $ui-black;
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
  }
  main {
    width: calc(100% - 250px);
    height: 100%;
    position: fixed;
    right: 0;
    z-index: 1;
  }
</style>

<header id="mySidenav" class="sidenav" class:closed={navClosed}>
  <section class="logo">
    <a aria-current={segment === undefined ? 'page' : undefined} href="/">
      <img {src} alt="RingRing Logo" />
      <h1>Ring-Ring</h1></a>
  </section>

  <section class="links">
    <DashNav
      bind:activeTabValue={currentDashboardTab}
      tabItems={dashboardTabs}
    />
  </section>
</header>

<main>
  {#if 1 === currentDashboardTab}
    <Stats
      bind:activeTabValue={currentDashboardTab}
      title="statistieken"
      {data}
    />
  {:else if 2 === currentDashboardTab}
    <Feedback
      bind:activeTabValue={currentDashboardTab}
      title="feedback"
      {data}
    />
  {:else if 3 === currentDashboardTab}
    <Contact bind:activeTabValue={currentDashboardTab} title="contact" {data} />
  {/if}
</main>
