<script>
</script>

<slot />
<!-- <LoadingPage /> -->
<!-- // import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  // import ErrorPage from '@/components/layouts/ErrorPage.svelte'

  // import { getData } from '../stores/fetcher.js'
  // import { endpoint } from '../modules/utils/entry.js'

  // export let segment
  // let response = getData(endpoint)
  // $: console.log(window) -->

<!-- 
{#await promise}
  <LoadingPage />
{:then dataset}
  <slot data={dataset} {segment} />
{:catch error}
  <ErrorPage {error} />
{/await} -->
<!--<script>
  // import LoadingPage from '@/components/layouts/LoadingPage.svelte'
</script>-->

<!--<script>
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'

  import { getData } from '../stores/fetcher.js'
  import { endpoint } from '../modules/utils/entry.js'

  export let segment
  let response = getData(endpoint)
</script>{#await $response}
  <LoadingPage />
{:then data}
  {console.log(data)}
  <slot {data} {segment} />
{:catch error}
  <ErrorPage {error} />
{/await} -->
<!--<script>
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  // import { getData } from '../stores/fetcher';

  // let promise = getData()

  // async function getData() {
  //   const res = await fetch(
  //     'https://cors-anywhere.herokuapp.com/http://ringring-data.jorrr.nl/data-ringring.json'
  //   )
  //   const data = await res.json()

  //   if (res.ok) {
  //     return data
  //   } else {
  //     throw new Error(data)
  //   }
  // }
  // let promise = getDataFunction()
  // async function getDataFunction() {
  //   const res = await fetch(
  //     `https://cors-anywhere.herokuapp.com/http://ringring-data.jorrr.nl/data-ringring.json?$limit=99`
  //   )
  //   const text = await res.text()

  //   if (res.ok) {
  //     return text
  //   } else {
  //     throw new Error(text)
  //   }
  // }
  // export let segment
</script>-->
<!-- {#if window.location.pathname === '/dashboard'}
  {#await $response}
    <LoadingPage />
  {:then value}
    <slot data={value} />
  {:catch error}
    <ErrorPage {error} />
  {/await}
  <slot />
{:else}
  <slot />
{/if} -->
