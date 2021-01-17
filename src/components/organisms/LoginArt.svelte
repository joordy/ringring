<script>
  import { FormArt } from '@/components/molecules/allElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 100%;
    background-color: $ui-red;
    display: grid;
    place-items: center;
    @include darkMode {
      background-color: $darkui-softblack;
    }
    .art {
      width: 70%;
      max-width: 400px;
      text-align: center;
      color: $ui-white;
      h2 {
        margin: 0 0 $m20 0;
        font-weight: $extra-bold;
      }
      h3 {
        margin: 0;
        line-height: 28px;
        font-weight: $normal;
      }
    }
  }
</style>

<article>
  <div class="art">
    <FormArt />
    <h2>Up to data.</h2>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl
      vivamus a, tincidunt ultrices.
    </h3>
  </div>
</article>
