<script>
  import {
    ErrorMessage,
    ErrorAnim,
  } from '@/components/templates/allTemplates.js'
  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'

  let result = []
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

<svelte:head>
  <title>{status} | Pagina niet gevonden</title>
</svelte:head>

{#if status === 404}
  <ErrorMessage />
  <ErrorAnim />

  <!-- {console.log(status)}
  <h1>{status}</h1>
  <p style="color: red">{error.message}</p>

  <p>{error.message}</p>

  <p>lorem</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if} -->
{/if}
