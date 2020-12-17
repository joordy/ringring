<script>
  import SmallViz from '@/components/molecules/SmallViz.svelte'
  export let activeTabValue
  export let title
</script>

<style lang="scss">
  section {
    width: 100%;
    .gridWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.75fr;
      grid-gap: 16px;
      grid-auto-rows: minmax(100px, auto);
      div {
        &:nth-of-type(4) {
          grid-column: 4;
          grid-row: 1 / 5;
        }
        &:nth-of-type(5) {
          grid-column: 1 / 4;
          grid-row: 2 / 5;
        }
        &:nth-of-type(6) {
          grid-column: 1 / 4;
          grid-row: 5 / 8;
        }
        &:nth-of-type(7) {
          grid-column: 4;
          grid-row: 5 / 8;
        }
      }
    }
  }
</style>

<svelte:head>
  <title>Statistieken {title}-overzicht</title>
</svelte:head>
<section>
  <h4>16 december 2020</h4>
  <article class="gridWrapper">
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
  </article>
</section>
