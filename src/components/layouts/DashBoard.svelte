<script>
  import DashNav from '@/components/templates/DashNavigation.svelte'
  import Feedback from '@/components/templates/FeedBack.svelte'
  import Stats from '@/components/templates/Stats.svelte'
  import CopyRight from '@/components/molecules/CopyRight.svelte'

  import { onMount } from 'svelte'

  export let segment
  export let data

  let src
  let navClosed = false
  let activeTabValue
  let currentDashboardTab
  let dashboardTabs = [
    { label: 'Statistieken', value: 1 },
    { label: 'Feedback', value: 2 },
  ]

  function handleNav(e) {
    navClosed = !navClosed
  }
  $: console.log(data)

  const checkPreferedTheme = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return (src = 'assets/icons/ringring-dark.png')
    } else {
      return (src = 'assets/icons/ringring.png')
    }
  }

  onMount(checkPreferedTheme)
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    height: 100%;
    width: 225px;
    background-color: $ui-white;
    border-radius: 0 $borderXL $borderXL 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #c4c4c4;
    position: fixed;
    left: 0;
    z-index: 2;
    overflow-x: hidden;
    transition: 0.5s;
    @include darkMode {
      background-color: $darkui-black;
      color: $darkui-white;
    }
    .logo {
      margin: $m30 0 $m100 0;
      display: grid;
      place-items: center;
      a {
        display: flex;
        color: $ui-black;
        text-decoration: none;
        @include darkMode {
          color: $darkui-white;
        }
        img {
          width: 36px;
        }
        h1 {
          line-height: 36px;
          margin-left: $m10;
          font-size: 24px;
          font-weight: $extra-bold;
          @include darkMode {
            color: $darkui-white;
          }
        }
      }
    }
  }
  #main {
    width: calc(100% - 225px);
    height: 100%;
    position: fixed;
    right: 0;
    z-index: 1;
    transition: 0.5s;
  }
  #main .closebtn {
    position: absolute;
    z-index: 13;
    top: $m30;
    left: 0;
    width: 25px;
    height: 36px;
    background-color: $ui-red;
    border-radius: 0px $borderS $borderS 0px;
    @include darkMode {
      background-color: $darkui-grey;
    }
    button {
      color: $ui-white;
      background-color: transparent;
      font-family: FontAwesome;
      border: none;
      font-size: 16px;
      background: none;
      border: none;
      cursor: pointer;
      outline: inherit;
      transition: 0.5s;
      &::before {
        padding-left: 7px;
        line-height: 36px;
        content: '\f053';
        transform: rotate(0deg);
      }
    }
  }
  .pushMainToLeft {
    width: calc(100% - 80px) !important;
    margin-left: -170px;
  }
  .pushMainToLeft .closebtn {
    padding-left: 3px;
    max-width: 20px;
    button {
      transform: rotate(180deg);
      &::before {
        padding-left: 7px;
      }
    }
  }
  .closed {
    width: 80px;
    .logo {
      a {
        h1 {
          display: none;
        }
      }
    }
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

<main id="main" class:pushMainToLeft={navClosed}>
  <div class="closebtn" on:click={handleNav}><button /></div>

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
  {/if}

  <CopyRight />
</main>
