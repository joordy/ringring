<script>
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import GlobalNav from '@/components/organisms/GlobalNav.svelte'
  import { getData } from '../stores/fetcher'
  import { endpoint } from '../modules/utils/entry.js'

  const response = getData(endpoint)
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

{#await $response}
  <LoadingPage />
{:then data}
  <GlobalNav {segment} />
  <main>
    <slot {data} />
  </main>
{:catch error}
  <ErrorPage {error} />
{/await}
