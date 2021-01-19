<script>
  import { checkPreferedTheme } from '@/utils/helpers/preferedTheme.js'
  import { onMount } from 'svelte'

  let dark = 'assets/ringring-dark.png'
  let light = 'assets/ringring.png'

  onMount(checkPreferedTheme(dark, light))
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
    font-size: $Heading1;
    font-weight: $extra-bold;
    margin: $m60 0 $m20 0;
  }
  h3 {
    font-size: $Heading5;
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
