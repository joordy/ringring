<script>
  // import Datepicker from 'svelte-calendar'
  // const daysOfWeek = [
  //   ['Maandag', 'Ma'],
  //   ['Dinsdag', 'Di'],
  //   ['Woensdag', 'Wo'],
  //   ['Donderdag', 'Do'],
  //   ['Vrijdag', 'Vr'],
  //   ['Zaterdag', 'Za'],
  //   ['Zondag', 'Zo'],
  // ]
  // const monthsOfYear = [
  //   ['Januari', 'Ene'],
  //   ['Februari', 'Feb'],
  //   ['Maart', 'Mar'],
  //   ['April', 'Abr'],
  //   ['Mei', 'May'],
  //   ['Juni', 'Jun'],
  //   ['Juli', 'Jul'],
  //   ['Augustus', 'Ago'],
  //   ['September', 'Sep'],
  //   ['October', 'Oct'],
  //   ['November', 'Nov'],
  //   ['December', 'Dec'],
  // ]
  // let selectedDateFormatted
  // let selectedDate
  // let userHasChosenDate
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    margin-right: $m30;
    input[type='month'] {
      border: none;
      background-color: transparent;
      font-size: 16px;
      &:active {
        border: none;
      }
      &::before {
        font-family: FontAwesome;
        content: '\f073';
        font-size: $Heading3;
        color: $ui-red;
        margin-right: $m5;
      }
      &::-webkit-calendar-picker-indicator {
        opacity: 0;
      }
    }
    // h4 {
    //   margin-bottom: $m30;
    //   line-height: $Heading3;
    //   &:before {
    //     font-family: FontAwesome;
    //     content: '\f073';
    //     font-size: $Heading3;
    //     color: $ui-red;
    //     margin-right: $m15;
    //   }
    // }
  }

  // .contents-wrapper.svelte-mc1z8c.svelte-mc1z8c {
  //   transform: translate(-50%, -50%);
  //   position: absolute;
  //   top: 721% !important;
  //   left: 227% !important;
  //   transition: none;
  //   z-index: 433;
  //   display: none;
  // }
</style>

<div class="datepicker">
  <!-- <Datepicker
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
  </Datepicker> -->

  <input type="month" value="2020-01" />
</div>
