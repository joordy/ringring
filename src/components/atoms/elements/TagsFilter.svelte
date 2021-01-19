<script>
  export let data
  $: console.log(data)

  // let popupOpen = false

  // const handlePopup = (e) => {
  //   popupOpen = !popupOpen
  // }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  // div {
  //   height: 30px;
  //   margin-right: $m30;
  //   border-bottom: 2px solid $ui-red;
  //   display: flex;
  //   position: relative;
  //   padding-bottom: 6px;
  //   @include darkMode {
  //     border-bottom: 2px solid $darkui-grey;
  //   }
  //   span {
  //     height: 24px;
  //     line-height: 24px;
  //     &::after {
  //       font-family: FontAwesome;
  //       content: '\f0b0';
  //       font-size: $Heading3;
  //       color: $ui-red;
  //       margin-right: $m5;
  //       @include darkMode {
  //         color: $darkui-grey;
  //       }
  //     }
  //   }
  //   h4 {
  //     margin-left: 15px;
  //     line-height: 24px;
  //     height: 24px;
  //   }
  // }
  // .popup {
  //   display: none;
  //   width: 250px;
  //   height: 215px;
  //   background-color: white;
  //   position: absolute;
  //   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
  //     0 4px 10px 0 rgba(0, 0, 0, 0.19);
  //   z-index: 20;
  //   border-radius: 10px;
  //   top: 35px;
  //   @include darkMode {
  //     background-color: $darkui-softblack;
  //     color: $darkui-white;
  //     box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.1),
  //       0 4px 10px 0 rgba(255, 255, 255, 0.1);
  //   }
  //   ul {
  //     padding: 0;
  //     margin: $m10 $m30;
  //     li {
  //       list-style-type: none;
  //       input[type='checkbox'] {
  //         margin-right: $m10;
  //       }
  //     }
  //   }
  // }

  // .open {
  //   display: block;
  // }
  div {
    height: 30px;
    display: flex;
    margin-right: $m20;
    span {
      height: 24px;
      margin-right: $m10;
      &:before {
        font-family: FontAwesome;
        content: '\f0b0';
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
    width: 210px;
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
      @include darkMode {
        background-color: #2b2e2e;
      }
    }
    &:hover::after {
      color: #fff;
      @include darkMode {
        color: $darkui-blue;
      }
    }
  }
</style>

<div>
  <span />
  <div class="select">
    <select name="" id="">
      {#each data as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </select>
  </div>
</div>

<!-- <div class="tagFilter" on:click={handlePopup}>
  <span />
  <h4>Tags</h4>
  <div class="popup" class:open={popupOpen}>
    <ul class="wrapper">
      {#each data as tag}
        <li>
          <input type="checkbox" id={tag} name={tag} value={tag} />
          <label for={tag}> {tag}</label>
        </li>
      {/each}
    </ul>
  </div>
</div> -->
