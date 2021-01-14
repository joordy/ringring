<script>
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  export let status
  export let error
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<ErrorPage {error} {status} />
