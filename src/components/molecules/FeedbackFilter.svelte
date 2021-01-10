<script>
  import DatePicker from '@/components/atoms/DatePicker.svelte'
  import SortPicker from '@/components/atoms/SortPicker.svelte'
  import TagsFilter from '@/components/atoms/TagsFilter.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: 30px;
    margin-bottom: $m30;
    display: flex;
  }
</style>

<article>
  <DatePicker />
  <SortPicker />
  <TagsFilter />
</article>
