<script>
  import { FormField } from '@/components/molecules/elements/allElements.js'

  let src = 'ringring-logo.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    display: grid;
    place-items: center;
    color: $text-dark-blue;
    background-color: white;
    section {
      width: 350px;
      .logo {
        width: 100%;
        display: flex;
        img {
          height: 40px;
        }
        h1 {
          line-height: 40px;
          font-size: 20px;
          font-weight: 700;
          margin-left: 10px;
        }
      }
      h2 {
        width: 100%;
        font-size: 32px;
        font-weight: 700;
        margin: 64px 0 20px 0;
      }
      h3 {
        font-size: 16px;
        opacity: 0.6;
        font-weight: 700;
        margin-bottom: 70px;
      }
    }
  }
</style>

<article>
  <section class="loginwrapper">
    <div class="logo">
      <img {src} alt="RingRing Logo" />
      <h1>Ring-Ring</h1>
    </div>
    <h2>Inloggen</h2>
    <h3>
      Log in met het account van de gemeente Amsterdam gedurende je registratie.
    </h3>

    <FormField />
  </section>
  <a href="/dashboard">Go quickly to dashboard</a>
</article>
