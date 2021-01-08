<script>
  import DashBoard from '@/components/layouts/DashBoard.svelte'

  export let data
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<DashBoard {data} />
