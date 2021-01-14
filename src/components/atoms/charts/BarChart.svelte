<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  function createChart() {
    let ctx = document.getElementById('myBarChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: [
          '0-5 KM',
          '5-10 KM',
          '10-15 KM',
          '15-20 KM',
          '20-25 KM',
          '25+ KM ',
        ],
        datasets: [
          {
            label: 'Aantal ritten',
            data: data.charts.barChart,
            backgroundColor: [
              'rgba(236, 78, 78, 1)',
              'rgba(249, 206, 206, 1)',
              'rgba(236, 78, 78, 1)',
              'rgba(249, 206, 206, 1)',
              'rgba(236, 78, 78, 1)',
              'rgba(249, 206, 206, 1)',
            ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        onResize: null,
        scales: {
          xAxes: [
            {
              ticks: {
                fontFamily: 'IBM Plex Mono, sans-serif',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontFamily: 'IBM Plex Mono, sans-serif',
                max: 24,
                beginAtZero: true,
              },
            },
          ],
        },
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
  <canvas id="myBarChart" aria-label="Chart about rides">
    <p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p>
  </canvas>
</div>
