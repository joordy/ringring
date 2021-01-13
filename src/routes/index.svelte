<script>
  import LoginPage from '@/components/layouts/LoginPage.svelte'
  import MobilePopup from '@/components/templates/MobilePopup.svelte'

  import { onMount } from 'svelte'

  onMount(() => {
    let size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight,
    }
    console.log(size)
  })
</script>

<svelte:head>
  <title>Home — Dashboard</title>
</svelte:head>

<LoginPage />
<MobilePopup />
