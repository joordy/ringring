<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  const checkLabelColor = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return '#fff'
    } else {
      return '#000'
    }
  }

  const checkPreferedTheme = () => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return [
        'rgba(4, 37, 105, 1)',
        'rgba(9, 68, 190, 1)',
        'rgba(48, 116, 255, 1)',
        'rgba(101, 151, 255, 1)',
        'rgba(173, 200, 255, 1)',
        'rgba(202, 217, 246, 1)',
        'rgba(4, 37, 105, 1)',
        'rgba(9, 68, 190, 1)',
      ]
    } else {
      return [
        'rgba(242, 193, 193, 1)',
        'rgba(248, 161, 161, 1)',
        'rgba(243, 16, 19, 1)',
        'rgba(239, 102, 102, 1)',
        'rgba(233, 62, 62, 1)',
        'rgba(199, 53, 53, 1)',
        'rgba(242, 193, 193, 1)',
        'rgba(248, 161, 161, 1)',
      ]
    }
  }

  const createChart = () => {
    let ctx = document.getElementById('barChartOne').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Aantal reacties:',
            data: Object.values(data),
            backgroundColor: checkPreferedTheme(),
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 30,
          },
        },
        legend: {
          display: false,
        },
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
                beginAtZero: true,
                fontSize: 10,
              },
              scaleLabel: {
                display: true,
                labelString: 'Aantal reacties',
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
  div {
    height: 100%;
    canvas {
      width: 100% !important;
      height: 100% !important;
      cursor: pointer;
    }
  }
</style>

<div>
  <canvas id="barChartOne" aria-label="Chart about rides">
    <p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p>
  </canvas>
</div>
