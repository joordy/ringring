<script>
  import FeedbackViz from '@/components/molecules/visuals/FeedbackViz.svelte'
  import SmallViz from '@/components/molecules/visuals/SmallViz.svelte'
  // export let activeTabValue
  export let title
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    h4 {
      margin-bottom: $margin-30;
    }
    section {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: $margin-30;
      article {
        height: 70vh;
        max-height: 890px;
        @media screen and (max-height: 900px) {
          height: 630px;
        }
      }
    }
  }
</style>

<!-- <svelte:head>
  <title>Feedback {title}-overzicht</title>
</svelte:head> -->

<section>
  <h4>16 december 2020</h4>
  <section class="gridWrapper">
    <article id="vizOne">
      <FeedbackViz />
    </article>
    <article id="vizTwo">
      <SmallViz />
    </article>
  </section>
</section>
