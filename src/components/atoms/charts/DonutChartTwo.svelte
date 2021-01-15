<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data
  export let chartcolor

  function createChart() {
    let ctx = document.getElementById('donutChartOne').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Spring","Summer","Fall"'],
        labels: [
          'Centrum',
          'Nieuw-West',
          'Noord',
          'Oost',
          'West',
          'Zuid',
          'Westpoort',
          'Nieuw-west',
        ],
        datasets: [
          {
            label: 'Aantal ritten',
            data: [
              data.centrum,
              data.nieuwWest,
              data.noord,
              data.oost,
              data.west,
              data.zuid,
              data.westpoort,
              data.zuidOost,
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
  <canvas id="donutChartOne" aria-label="Chart about rides">
    <p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p>
  </canvas>
</div>
