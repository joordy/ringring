<script>
  const monthsOfYear = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'October',
    'November',
    'December',
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    height: 24px;
    display: flex;
    margin-right: $m20;
    span {
      height: 24px;
      margin-right: $m10;
      &:before {
        font-family: FontAwesome;
        content: '\f073';
        font-size: $Heading3;
        color: $ui-red;
        margin-right: $m5;
        line-height: 24px;
        @include darkMode {
          color: $darkui-blue;
        }
      }
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #fff;
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: black;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Inter', sans-serif;
    &:hover {
      opacity: 0.8;
    }
    @include darkMode {
      background: $darkui-grey;
      color: $darkui-white;
    }
    &::-ms-expand {
      display: none;
    }
  }
  .select {
    position: relative;
    display: flex;
    width: 120px;
    height: 24px;
    line-height: 3;
    background: #5c6664;
    overflow: hidden;
    border-radius: 0.25em;
    &::after {
      font-family: FontAwesome;
      content: '\f0dc';
      position: absolute;
      top: 0;
      right: 0;
      line-height: 24px;
      padding: 0.2px 7px;
      background-color: $ui-red;
      cursor: pointer;
      pointer-events: none;
      transition: 0.25s all ease;
      color: white;
      @include darkMode {
        background-color: #2b2e2e;
      }
    }
    &:hover::after {
      color: $ui-lightred;
      @include darkMode {
        color: $darkui-blue;
      }
    }
  }
</style>

<div class="datepicker">
  <span />
  <div class="select">
    <select name="" id="">
      {#each monthsOfYear as month}
        <option value={month}>{month}</option>
      {/each}
    </select>
  </div>
</div>
