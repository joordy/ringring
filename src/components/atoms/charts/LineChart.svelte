<script>
  // Imports theme checkers
  import {
    checkLabelColor,
    checkPreferedTheme,
  } from '@/utils/helpers/preferedTheme.js'

  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  let dark = 'rgba(36, 107, 253, 1)'
  let light = 'rgba(236, 78, 78, 1)'
  let values = Object.values(data.charts.lineChart).reverse()
  let labels = Object.keys(data.charts.lineChart).sort()

  values.shift()
  labels.shift()

  function createChart() {
    let ctx = document.getElementById('lineChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Aantal ritten vandaag:',
            fill: false,
            // lineTension: 0.6,
            backgroundColor: checkPreferedTheme(dark, light),
            borderColor: checkPreferedTheme(dark, light),
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: checkPreferedTheme(dark, light),
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: values,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                fontFamily: 'IBM Plex Mono, sans-serif',
                fontSize: 10,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontFamily: 'IBM Plex Mono, sans-serif',
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Aantal gereden ritten',
                fontColor: checkLabelColor(),
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
  @import 'src/styles/index.scss';

  .graph {
    height: inherit;
    width: calc(inherit + 15px);
    box-shadow: none;
    border-radius: 0;
    canvas {
      width: 100% !important;
      height: 100% !important;
      cursor: pointer;
    }
  }
</style>

<div class="graph">
  <canvas id="lineChart" aria-label="Chart about traffic"><p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p></canvas>
</div>
