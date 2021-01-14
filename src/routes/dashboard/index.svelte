<script>
  import { cleanedData } from '../../utils/cleanData.js'
  import { onMount } from 'svelte'

  import DashBoard from '@/components/layouts/DashBoard.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  import MobilePopup from '@/components/templates/MobilePopup.svelte'

  onMount(cleanedData)
</script>

<svelte:head>
  <title>Statiestieken Dashboard | Ring-Ring</title>
</svelte:head>

{#await cleanedData()}
  <LoadingPage />
{:then data}
  <DashBoard {data} />
{:catch error}
  <ErrorPage {error} />
{/await}

<MobilePopup />
