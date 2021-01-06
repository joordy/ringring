<script>
  export let formLabel
  export let labelName
  export let inputType
  export let placeHolder
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    margin-bottom: 20px;
    label {
      display: block;
      font-weight: 700;
      margin-bottom: 5px;
    }
    input[type='text'],
    input[type='password'] {
      width: calc(100% - 10px);
      padding: 10px 5px;
      border-radius: 5px;
      border: 1px solid #c4c4c4;
      &:focus {
        border: 1px solid $ui-dark-blue;
      }
    }
  }
</style>

<div>
  <label for={formLabel}>{labelName}</label>
  <input type={inputType} placeholder={placeHolder} />
</div>
