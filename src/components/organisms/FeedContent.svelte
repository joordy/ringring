<script>
  // import {
  //   FeedbackViz,
  //   TagViz,
  // } from '@/components/molecules/visuals/allVisuals.js'

  import { FeedbackFilter } from '@/components/molecules/elements/allElements.js'

  export let title
  export let data
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
      grid-template-rows: 15vh 15vh 15vh 15vh;
      article {
        background-color: white;
        &:nth-of-type(1) {
          grid-column: 1;
          grid-row: 1 / 5;
        }
        &:nth-of-type(2) {
          grid-column: 2;
          grid-row: 1 / 3;
        }
        &:nth-of-type(3) {
          grid-column: 2;
          grid-row: 3 / 5;
        }
      }
    }
  }
</style>

<section class="feedback">
  <FeedbackFilter />
  <section class="gridWrapper">
    <article id="vizOne">
      <!-- <FeedbackViz {data} /> -->
    </article>
    <article id="vizTwo">
      <!-- <TagViz {data} title="Onderwerpen verdeeld op basis van feedbacktag" /> -->
    </article>
    <article id="vizThree">
      <!-- <TagViz {data} title="Onderwerpen verdeeld op basis van feedbacktag" /> -->
    </article>
  </section>
</section>
