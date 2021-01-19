<script>
  import DashHeader from '@/components/organisms/DashHeader.svelte'
  import StatsContent from '@/components/organisms/StatsContent.svelte'

  export let data
</script>

<svelte:head>
  <title>Statistieken Dashboard | Ring-Ring</title>
</svelte:head>

<DashHeader />

<StatsContent {data} />
