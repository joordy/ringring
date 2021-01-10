<script>
  import { getData } from '../utils/clean/data.js'
  import { onMount } from 'svelte'

  import DashBoard from '@/components/layouts/DashBoard.svelte'
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'

  onMount(getData)
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

{#await getData()}
  <LoadingPage />
{:then data}
  <DashBoard {data} />
{:catch error}
  <ErrorPage {error} />
{/await}
