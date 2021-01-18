<script>
  import { DatePicker } from '@/components/atoms/elements/allElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: 30px;
    margin-bottom: $m30;
    display: flex;
    @media screen and (max-height: 900px) {
      margin-bottom: $m15;
    }
  }
</style>

<article>
  <DatePicker />
</article>
