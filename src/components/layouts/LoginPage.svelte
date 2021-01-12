<script>
  import { LoginForm, LoginArt } from '@/components/organisms/allOrganisms.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 100vh;
  }
</style>

<section>
  <LoginForm />
  <LoginArt />
</section>
