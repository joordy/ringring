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

  const checkPreferedTheme = (dark, light) => {
    let value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (value === true) {
      return [
        'rgba(266, 236, 255, 1)',
        'rgba(177, 203, 255, 1)',
        'rgba(136, 173, 251, 1)',
        'rgba(95, 142, 241, 1)',
        'rgba(68, 121, 234, 1)',
        'rgba(23, 89, 229, 1)',
        'rgba(0, 69, 215, 1)',
        'rgba(10, 62, 173, 1)',
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
    let ctx = document.getElementById('barChartTwo').getContext('2d')
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
            bottom: 35,
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
  <canvas id="barChartTwo" aria-label="Chart about rides">
    <p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p>
  </canvas>
</div>
