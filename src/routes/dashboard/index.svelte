<script>
  import DashBoard from '@/components/layouts/DashBoard.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import MobilePopup from '@/components/templates/MobilePopup.svelte'

  import { cleanedData } from '../../utils/cleanData.js'
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('test')
    // console.log('data', cleanedData())
  })
</script>

<svelte:head>
  <title>Statistieken Dashboard | Ring-Ring</title>
</svelte:head>

{#await cleanedData()}
  <LoadingPage />
{:then data}
  <DashBoard {data} />
{:catch error}
  <ErrorPage {error} />
{/await}

<MobilePopup />
