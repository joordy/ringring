<script>
  import SmallViz from '@/components/molecules/SmallViz.svelte'
  export let activeTabValue
  console.log(activeTabValue)
</script>

<style lang="scss">
  section {
    width: 100%;
    // height: 500px;
    .gridWrapper {
      // width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: 16px;
      div {
        background-color: blue;
        &:nth-of-type(4) {
          grid-column: 4;
          grid-row: 1 /3;
        }
        &:nth-of-type(5) {
          grid-column: 1 / 4;
          grid-row: 2 /3;
        }
        &:nth-of-type(6) {
          grid-column: 1 / 4;
          grid-row: 3 / 6;
        }
        &:nth-of-type(7) {
          grid-column: 4;
          grid-row: 3 / 6;
        }
      }
    }
  }
</style>

<section>
  <h4>16 december 2020</h4>
  <article class="gridWrapper">
    <!-- <SmallViz /> -->
    <!-- <SmallViz />
    <SmallViz />
    <SmallViz /> -->
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <div>
      <SmallViz />
    </div>
    <!-- <div>test</div>
    <div>test</div>
    <div>test</div> -->
    <!-- <div>test</div> -->
    <!-- <div>test</div>
    <div>test</div>
    <div>test</div> -->
    <!-- <SmallViz /> -->
  </article>
</section>
