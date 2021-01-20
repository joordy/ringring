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

<style lang="scss">
  @import 'src/styles/index.scss';

  .logo {
    width: 100%;
    display: flex;

    img {
      height: 40px;
    }
    h1 {
      line-height: 40px;
      font-size: $Heading4;
      font-weight: $extra-bold;
      margin-left: $m10;
    }
  }
  h2 {
    width: 100%;
    font-size: $Heading2;
    font-weight: $extra-bold;
    margin: $m60 0 $m20 0;
  }
  h3 {
    font-size: $Heading3;
    opacity: 0.6;
    font-weight: $extra-bold;
    margin-bottom: $m70;
  }
</style>

<div class="logo">
  <img {src} alt="RingRing Logo" />
  <h1>Ring-Ring</h1>
</div>
<h2>Inloggen</h2>
<h3>
  Log in met het account van de gemeente Amsterdam gedurende je registratie.
</h3>
