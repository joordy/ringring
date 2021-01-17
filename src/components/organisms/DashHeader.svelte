<script>
  import { TabNavigation } from '@/components/molecules/allElements.js'
  import { AccountInfo } from '@/components/organisms/allElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    height: 120px;
    position: relative;
    background-color: $ui-white;
    border-bottom: 1px solid $ui-grey;
    @include darkMode {
      background-color: $darkui-black;
      color: $darkui-white;
      border-bottom: 1px solid $darkui-grey;
    }
    h2 {
      font-size: $Heading2;
      font-weight: $bold;
      line-height: 48px;
      padding: $m30 $m50 $m20 $m50;
    }
  }
</style>

<section>
  <h2>Dashboard</h2>

  <TabNavigation />

  <AccountInfo />
</section>
