<script>
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import { getData } from '../stores/fetcher.js'
  import { endpoint } from '../modules/utils/entry.js'

  import HeaderImg from '@/components/atoms/HeaderImg.svelte'
  import HeaderLinks from '@/components/atoms/HeaderLinks.svelte'
  import HeaderAccount from '@/components/atoms/HeaderAccount.svelte'

  let response = getData(endpoint)
  let navClosed = false
  function handleNav(e) {
    navClosed = !navClosed
  }

  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    height: calc(100vh - 60px);
    width: 250px;
    background-color: $ui-dark-blue;
    color: $text-soft-white;
    border-radius: 0 30px 30px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }
  .sidenav .closebtn {
    position: absolute;
    top: 50px;
    right: 0;
    width: 25px;
    height: 48px;
    font-size: 36px;
    margin-left: 50px;
    background-color: $ui-dark-blue;
    z-index: 5;
  }
  #main {
    position: relative;
    left: 250px;
    width: calc(100% - 250px - 100px);
    transition: margin-left 0.5s;
    padding: 50px;
  }
  .pushMainToLeft {
    width: calc(100% - 80px - 100px) !important;
    margin-left: -170px;
  }
  .closed {
    width: 80px;
  }
</style>

{#await $response}
  <LoadingPage />
{:then data}
  <header id="mySidenav" class="sidenav" class:closed={navClosed}>
    <div class="closebtn" on:click={handleNav}>&times;</div>

    <HeaderImg {segment} />
    <HeaderLinks {segment} />
    <HeaderAccount />
  </header>

  <main id="main" class:pushMainToLeft={navClosed}>
    <slot {data} />
  </main>
{:catch error}
  <ErrorPage {error} />
{/await}
