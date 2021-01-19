<script>
  import LoginForm from '@/components/organisms/LoginForm.svelte'
  import LoginArt from '@/components/organisms/LoginArt.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    height: 100vh;
  }
</style>

<section>
  <LoginForm />
  <LoginArt />
</section>
