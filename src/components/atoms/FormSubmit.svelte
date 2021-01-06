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
    background-color: $ui-dark-blue;
    color: $text-soft-white;
    padding: 10px 0;
    border-radius: 5px;
    margin-bottom: 10px;
  }
</style>

<input type={submitText} value={valueText} />
