<script>
  import Datepicker from 'svelte-calendar'
  const daysOfWeek = [
    ['Maandag', 'Ma'],
    ['Dinsdag', 'Di'],
    ['Woensdag', 'Wo'],
    ['Donderdag', 'Do'],
    ['Vrijdag', 'Vr'],
    ['Zaterdag', 'Za'],
    ['Zondag', 'Zo'],
  ]
  const monthsOfYear = [
    ['Januari', 'Ene'],
    ['Februari', 'Feb'],
    ['Maart', 'Mar'],
    ['April', 'Abr'],
    ['Mei', 'May'],
    ['Juni', 'Jun'],
    ['Juli', 'Jul'],
    ['Augustus', 'Ago'],
    ['September', 'Sep'],
    ['October', 'Oct'],
    ['November', 'Nov'],
    ['December', 'Dec'],
  ]
  let selectedDateFormatted
  let selectedDate
  let userHasChosenDate
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    margin-right: $m30;
    h4 {
      margin-bottom: $m30;
      line-height: $Heading3;
      &:before {
        font-family: FontAwesome;
        content: '\f073';
        font-size: $Heading3;
        color: $ui-red;
        margin-right: $m5;
      }
    }
  }
  // .calendar-button {
  //   width: 250px !important;
  //   background: transparent !important;
  //   border: none !important;
  //   border-radius: 0px !important;
  //   border-bottom: $ui-red !important;
  //   color: black;
  //   &::before {
  //     font-family: FontAwesome;
  //     content: '\f073';
  //     font-size: $Heading3;
  //     color: $ui-red;
  //     margin-right: $m5;
  //   }

  // padding: 10px 20px;
  // border: 1px solid var(--button-border-color);
  // display: block;
  // text-align: center;
  // width: 300px;
  // text-decoration: none;
  // cursor: pointer;
  // background: var(--button-background-color);
  // color: var(--button-text-color);
  // border-radius: 7px;
  // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  //}
  .contents-wrapper.visible.svelte-mc1z8c.svelte-mc1z8c {
    transform: translate(-50%, -50%) translate(0px, 225.2951px) !important;
  }
</style>

<div class="datepicker">
  <Datepicker
    bind:formattedSelected={selectedDateFormatted}
    bind:selected={selectedDate}
    bind:dateChosen={userHasChosenDate}
    {daysOfWeek}
    {monthsOfYear}
    dayHighlightedBackgroundColor="#F9CECE"
    dayHighlightedTextColor="#fff"
    highlightColor="#F9CECE"
  >
    <button class="custom-button">
      {#if userHasChosenDate}
        Chosen:
        {selectedDateFormatted}
      {:else}Pick a date{/if}
    </button>
  </Datepicker>
</div>
