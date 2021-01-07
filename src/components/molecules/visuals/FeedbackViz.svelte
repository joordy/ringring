<script>
  import FeedbackItem from '@/components/atoms/FeedbackItem.svelte'
  export let title
  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'gisteren'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .feedbackSection {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    // border: 1px solid #c4c4c4;
    border-radius: 5px;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>

<div class="feedbackSection">
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
  <FeedbackItem />
</div>
