<script>
  import DatePicker from '@/components/atoms/elements/DatePicker.svelte'
  import SortPicker from '@/components/atoms/elements/SortPicker.svelte'
  import TagsFilter from '@/components/atoms/elements/TagsFilter.svelte'

  export let data
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: 24px;
    margin-bottom: $m30;
    display: flex;
    position: relative;
    @media screen and (max-height: 900px) {
      margin-bottom: $m15;
    }
    div {
      height: 24px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      p {
        line-height: 24px;
        span {
          font-weight: $extra-bold;
          font-size: $Heading4;
          line-height: 24px;
        }
      }
    }
  }
</style>

<article>
  <DatePicker />
  <SortPicker />
  <TagsFilter data={Object.keys(data.charts.subjectChart)} />
  <div>
    <p>Totaal aantal reacties: <span> {data.feedbackData.length} </span></p>
  </div>
</article>
