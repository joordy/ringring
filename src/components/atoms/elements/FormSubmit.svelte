<script>
  export let submitText
  export let valueText
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  input[type='submit'] {
    background: none;
    border: none;
    width: 100%;
    display: block;
    background-color: $ui-red;
    color: $ui-white;
    padding: 10px 0;
    border-radius: $borderS;
    margin-bottom: $m10;
  }
</style>

<input type={submitText} value={valueText} />
