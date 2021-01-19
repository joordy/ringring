<script>
  import DashHeader from '@/components/organisms/Dashheader.svelte'
  import FeedContent from '@/components/organisms/FeedContent.svelte'

  export let data
</script>

<svelte:head>
  <title>Feedback Dashboard | Ring-Ring</title>
</svelte:head>

<DashHeader />

<FeedContent {data} />
