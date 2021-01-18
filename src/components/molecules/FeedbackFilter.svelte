<script>
  import {
    DatePicker,
    SortPicker,
    TagsFilter,
  } from '@/components/atoms/elements/allElements.js'
  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: 30px;
    margin-bottom: $m30;
    display: flex;
    position: relative;
    div {
      height: 30px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      p {
        span {
          font-weight: $extra-bold;
          font-size: $Heading4;
        }
      }
    }
  }
</style>

<article>
  <DatePicker />
  <SortPicker />
  <TagsFilter />
  <div>
    <p>Totaal aantal reacties: <span> {data.feedbackData.length} </span></p>
  </div>
</article>
