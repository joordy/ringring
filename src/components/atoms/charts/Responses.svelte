<script>
  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 95%;
    margin: $m10 auto $m20 auto;
    border-bottom: 1px solid #c4c4c4;
    .text {
      width: 100%;
      .tags {
        display: flex;
        height: 40px;
        .round {
          border-radius: 50%;
          width: 22px;
          height: 22px;
          margin: $m10 $m10 $m10 0;
        }
        .roundRed {
          background-color: $ui-red;
        }
        .roundGreen {
          background-color: $ui-green;
        }
        .roundOrange {
          background-color: $ui-orange;
        }
        h4 {
          height: 100%;
          margin: 0em $m15 0em 0em;
          border: 1px solid $ui-grey;
          border-radius: $borderS;
          font-size: 14px;
          line-height: 40px;
          padding: 0px $m15;
        }
      }
      p {
        font-size: 1em;
        margin: $m15 0 0 $m30;
      }
      .timestamp {
        margin-bottom: $m15;
        h5 {
          margin: $m20 0 0 $m30;
          font-size: 12px;
          color: $ui-grey;
        }
      }
    }
  }
</style>

<section>
  <article class="text">
    <div class="tags">
      {#if data.gevoelsVeiligheid === 1}
        <div class="round roundGreen" />
      {:else if data.gevoelsVeiligheid === 2}
        <div class="round roundOrange" />
      {:else}
        <div class="round roundRed" />
      {/if}
      {#each data.feedbackTag as item}
        <h4>#{item}</h4>
      {/each}
    </div>
    <p>{data.feedback}</p>
    <div class="timestamp">
      <h5>12 minuten geleden</h5>
    </div>
  </article>
</section>
