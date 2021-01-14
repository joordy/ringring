<script>
  export let formLabel
  export let labelName
  export let inputType
  export let placeHolder
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    margin-bottom: $m20;
    label {
      display: block;
      font-weight: $extra-bold;
      margin-bottom: $m5;
    }
    input[type='text'],
    input[type='password'] {
      width: calc(100% - 10px);
      padding: $m10 $m5;
      border-radius: $borderS;
      border: 1px solid #c4c4c4;
      &:focus {
        border: 1px solid $ui-darkblue;
      }
    }
  }
</style>

<div>
  <label for={formLabel}>{labelName}</label>
  <input type={inputType} placeholder={placeHolder} />
</div>
