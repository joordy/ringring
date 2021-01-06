<script>
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import HeaderImg from '@/components/atoms/HeaderImg.svelte'
  import HeaderLinks from '@/components/atoms/HeaderLinks.svelte'
  import HeaderAccount from '@/components/atoms/HeaderAccount.svelte'

  import { getData } from '../stores/fetcher.js'
  import { endpoint } from '../modules/utils/entry.js'

  export let segment
  let response = getData(endpoint)
  let navClosed = false

  function handleNav(e) {
    navClosed = !navClosed
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  header {
    // height: calc(100vh - 20px);
    height: 100vh;
    width: 250px;
    background-color: $ui-dark-blue;
    color: $text-soft-white;
    border-radius: 0 20px 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 20px;
    transition: 0.5s;
  }

  #main {
    position: relative;
    left: 250px;
    width: calc(100% - 250px - 100px);
    height: calc(100vh - 100px);
    transition: margin-left 0.5s;
    padding: 50px;
  }
  #main .closebtn {
    position: absolute;
    top: 50px;
    left: 0;
    width: 25px;
    height: 50px;
    background-color: $ui-dark-blue;
    border-radius: 0px 4px 4px 0px;
    button {
      color: $text-soft-white;
      background-color: transparent;
      font-family: FontAwesome;
      border: none;
      font-size: 20px;
      background: none;
      border: none;
      cursor: pointer;
      outline: inherit;
      &::before {
        padding-left: 3px;
        line-height: 48px;
        content: '\f053';
        transform: rotate(0deg);
      }
    }
  }
  .pushMainToLeft {
    width: calc(100% - 80px - 100px) !important;
    margin-left: -170px;
  }
  .pushMainToLeft .closebtn {
    padding-left: 3px;

    button {
      transform: rotate(180deg);
    }
  }
  .closed {
    width: 80px;
  }
</style>

{#await $response}
  <LoadingPage />
{:then data}
  {#if window.location.pathname === '/statistics' || window.location.pathname === '/contact' || window.location.pathname === '/feedback'}
    <header id="mySidenav" class="sidenav" class:closed={navClosed}>
      <HeaderImg {segment} />
      <HeaderLinks {segment} />
      <HeaderAccount />
    </header>

    <main id="main" class:pushMainToLeft={navClosed}>
      <div class="closebtn" on:click={handleNav}><button /></div>
      <section>
        <slot {data} />
      </section>
    </main>
  {:else}
    <main>
      <slot {data} />
    </main>
    <!-- else content here -->
  {/if}
{:catch error}
  <ErrorPage {error} />
{/await}
