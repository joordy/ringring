<script>
  import FeedbackFilter from '@/components/molecules/FeedbackFilter.svelte'
  import FeedbackViz from '@/components/molecules/visuals/FeedbackViz.svelte'
  import PolarViz from '@/components/molecules/visuals/PolarViz.svelte'
  export let title
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .feedback {
    background-color: $ui-softwhite;
    padding: $m30 $m50;
    width: calc(100% - 100px);
    height: 100%;
    h4 {
      margin-bottom: $margin-30;
    }
    section {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: $m30;
      article {
        background-color: white;
        &:nth-of-type(1) {
          height: 70vh;
        }
        &:nth-of-type(2) {
          height: 39vh;
        }
      }
    }
  }
</style>

<section class="feedback">
  <FeedbackFilter />
  <section class="gridWrapper">
    <article id="vizOne">
      <FeedbackViz />
    </article>
    <article id="vizTwo">
      <PolarViz title="Gevoelsmatige veiligheid" />
    </article>
  </section>
</section>
