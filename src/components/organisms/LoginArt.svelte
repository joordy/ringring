<script>
  import { FormArtWork } from '@/components/molecules/elements/allElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    color: $ui-white;
    background-color: $ui-traffic-red;
    padding: 0 150px;
    section {
      width: 350px;
      margin: 0 auto;
      text-align: center;
      h2 {
        margin: 0 0 20px 0;
      }
      h3 {
        margin: 0;
        line-height: 28px;
        font-weight: 400;
      }
    }
  }
</style>

<article>
  <FormArtWork />

  <section>
    <h2>Keeping the overview.</h2>
    <h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl
      vivamus a, tincidunt ultrices.
    </h3>
  </section>
</article>
