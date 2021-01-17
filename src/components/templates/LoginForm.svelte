<script>
  import { LoginForm, LoginArt } from '@/components/organisms/allElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    height: 100vh;
    // article {
    //   width: 100%;
    //   height: 100%;
    //   &:nth-of-type(1) {
    //     background-color: $ui-white;
    //   }
    //   &:nth-of-type(2) {
    //     background-color: $ui-red;
    //   }
    // }
  }
</style>

<section>
  <LoginForm />
  <LoginArt />
</section>
