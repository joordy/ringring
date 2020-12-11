<script>
  import { Router } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'
  import { onMount } from 'svelte'

  // const getData = receiveData()
  // let dataset

  // onMount(async () => {
  //   const res = await fetch('https://opendata.rdw.nl/resource/mz4f-59fw.json')
  //   dataset = await res.json()
  // })
</script>

<style>
</style>

<Router {routes} />

<!-- {#await getData}
  <p>Loading..</p>
{:then data}
  <Router {routes} dataset={data} />
  <Router {routes} fetchedData={data} />
{:catch error}
  <p>error</p>
  promise was rejected
{/await} -->
