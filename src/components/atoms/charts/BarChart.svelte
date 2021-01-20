<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  let dark = [
    'rgba(23, 89, 229, 1)',
    'rgba(68, 121, 234, 1)',
    'rgba(95, 142, 241, 1)',
    'rgba(136, 173, 251, 1)',
    'rgba(177, 203, 255, 1)',
    'rgba(266, 236, 255, 1)',
  ]
  let light = [
    'rgba(242, 193, 193, 1)',
    'rgba(248, 161, 161, 1)',
    'rgba(243, 16, 19, 1)',
    'rgba(239, 102, 102, 1)',
    'rgba(233, 62, 62, 1)',
    'rgba(199, 53, 53, 1)',
  ]

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

  function createBarChart() {
    let ctx = document.getElementById('myBarChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['0-5', '5-10', '10-15', '15-20', '20-25', '25+ '],
        datasets: [
          {
            label: 'Aantal ritten binnen deze categorie',
            padding: 14,
            data: Object.values(data.charts.barChart),
            backgroundColor: checkPreferedTheme(dark, light),
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
              scaleLabel: {
                display: true,
                labelString: 'Aantal ritten',
                fontColor: checkLabelColor(),
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
                labelString: 'Kilometers',
                fontColor: checkLabelColor(),
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        legend: {
          display: false,
        },
      },
    })
  }

  onMount(createBarChart)
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
      cursor: pointer;
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
