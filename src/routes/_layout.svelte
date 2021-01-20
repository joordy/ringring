<script>
  import { onMount } from 'svelte'
  let src

  const checkPreferedTheme = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return (src = 'assets/icons/ringring-dark.png')
    } else {
      return (src = 'assets/icons/ringring.png')
    }
  }

  onMount(checkPreferedTheme)
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={src} />
</svelte:head>

<slot />
