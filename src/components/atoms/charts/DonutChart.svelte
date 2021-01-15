<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data
  export let chartcolor

  function createChart() {
    let ctx = document.getElementById('donutChartTwo').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Spring","Summer","Fall"'],
        labels: [
          'Fietspad',
          'Oversteekpunt',
          'Verkeersindeling',
          'Verkeersdrukte',
          'Wegwerkzaamheden',
          'Verkeerslichten',
          'Autoverkeer',
          'Stoplicht',
        ],
        datasets: [
          {
            label: 'Aantal ritten',
            data: [
              data.fietspad,
              data.oversteekpunt,
              data.verkeersindeling,
              data.verkeersdrukte,
              data.wegwerkzaamheden,
              data.verkeerslichten,
              data.autoverkeer,
              data.stoplicht,
            ],
            backgroundColor: chartcolor,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        onResize: null,
      },
    })
  }

  onMount(createChart)
</script>

<style lang="scss">
  .graph {
    display: block;
    height: inherit;
    width: calc(inherit + 15px);
    box-shadow: none;
    border-radius: 0;
    canvas {
      width: 100% !important;
      height: 100% !important;
    }
  }
</style>

<div class="graph">
  <canvas id="donutChartTwo" aria-label="Chart about rides">
    <p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p>
  </canvas>
</div>
