<script>
  import { createEventDispatcher } from 'svelte'

  export let items
  export let activeItem

  const dispatch = createEventDispatcher()

  const calculateDay = (input) => {
    let day = new Date(input)
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/')
    return day
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .resWrapper {
    padding: $m10 0 $m20 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
  .response {
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
  .active {
    padding: 30px 10px 15px 10px;
    border-radius: 0px;
    background-color: rgba(0, 0, 0, 0.04);
    @include darkMode {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
</style>

<section class="resWrapper">
  <ul>
    {#each items as response}
      <li on:click={() => dispatch('responseChange', response)}>
        <section class:active={response === activeItem} class="response">
          <article class="text">
            <div class="tags">
              {#if response.gevoelsVeiligheid === 1}
                <div class="round roundGreen" />
              {:else if response.gevoelsVeiligheid === 2}
                <div class="round roundOrange" />
              {:else}
                <div class="round roundRed" />
              {/if}
              {#each response.feedbackTag as tag}
                <h4>#{tag}</h4>
              {/each}
            </div>
            <p>{response.feedback}</p>
            <div class="timestamp">
              <h5>{calculateDay(response.route.properties.day)}</h5>
            </div>
          </article>
        </section>
      </li>
    {/each}
  </ul>
</section>
