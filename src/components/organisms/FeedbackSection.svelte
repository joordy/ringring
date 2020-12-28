<script>
  import SmallViz from '@/components/molecules/visuals/SmallViz.svelte'
  // export let activeTabValue
  export let title
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    h4 {
      margin-bottom: $margin30;
    }
    article {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: $margin30;
      div {
        height: 700px;
        &:nth-child(1) {
          height: 1000px;
        }
      }
    }
  }
</style>

<svelte:head>
  <title>Feedback {title}-overzicht</title>
</svelte:head>
<section>
  <h4>16 december 2020</h4>
  <article class="gridWrapper">
    <div id="vizOne">
      <SmallViz />
    </div>
    <div id="vizTwo">
      <SmallViz />
    </div>
    <!-- <div id="vizThree">
      <SmallViz />
    </div>
    <div id="vizFour">
      <SmallViz />
    </div>
    <div id="vizFive">
      <SmallViz />
    </div>
    <div id="vizSix">
      <SmallViz />
    </div>
    <div id="vizSeven">
      <SmallViz />
    </div> -->
  </article>
</section>
