<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  let dark = 'rgba(36, 107, 253, 1)'
  let light = 'rgba(236, 78, 78, 1)'
  let values = Object.values(data.charts.lineChart).reverse()
  let labels = Object.keys(data.charts.lineChart).sort()
  values.shift()
  labels.shift()

  let label = labels.map((item) => {
    return item.substring(5)
  })

  const checkLabelColor = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return '#fff'
    } else {
      return '#000'
    }
  }

  const checkPreferedTheme = (dark, light) => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return dark
    } else {
      return light
    }
  }

  function createLineChart() {
    let ctx = document.getElementById('lineChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        datasets: [
          {
            label: 'Aantal ritten vandaag:',
            padding: 14,

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
            pointHoverRadius: 15,
            lineTension: 0.2,
            data: values,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 10,
          },
        },
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

  onMount(createLineChart)
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
