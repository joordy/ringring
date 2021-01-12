<script>
  import FeedbackItem from '@/components/atoms/FeedbackItem.svelte'

  export let title
  export let data

  let feedbackData = data.feedbackData

  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'gisteren'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .feedbackSection {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &:-webkit-scrollbar-track {
      background: #c4c4c4;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $ui-red;
      border-radius: 20px;
      border: 1px solid #c4c4c4;
    }
  }
</style>

<div class="feedbackSection">
  {#each feedbackData as item}
    <!-- {console.log(item)} -->
    <FeedbackItem data={item} />
  {/each}
</div>
