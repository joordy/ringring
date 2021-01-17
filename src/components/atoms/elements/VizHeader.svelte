<script>
  export let title
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    color: $ui-black;
    font-size: 18px;
    font-weight: $semi-bold;
    margin-bottom: $m10;
  }
  @media (prefers-color-scheme: dark) {
    h3 {
      color: #eeeeef;
    }
  }
</style>

<h3>{title}</h3>
