<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  function createChart() {
    let ctx = document.getElementById('lineChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '1 jan.',
          '2 jan.',
          '3 jan.',
          '4 jan.',
          '5 jan.',
          '6 jan.',
          '7 jan.',
          '8 jan.',
          '9 jan.',
          '10 jan.',
          '11 jan.',
          '12 jan.',
          '13 jan.',
          '14 jan.',
          '15 jan.',
          '16 jan.',
          '17 jan.',
          '18 jan.',
          '19 jan.',
          '20 jan.',
          '21 jan.',
          '22 jan.',
          '23 jan.',
          '24 jan.',
          '25 jan.',
          '26 jan.',
          '27 jan.',
          '28 jan.',
          '29 jan.',
          '30 jan.',
          '31 jan.',
        ],
        datasets: [
          {
            label: 'Drukte in de maand januari',
            fill: false,
            lineTension: 0.6,
            backgroundColor: 'rgba(236, 78, 78, 1)',
            borderColor: 'rgba(236, 78, 78, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(236, 78, 78, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: data.charts.lineChart,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
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
  @import 'src/styles/index.scss';

  .graph {
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
  <canvas id="lineChart" aria-label="Chart about traffic"><p>
      Your browser does not support this chart. Please visit a recent updated
      browser.
    </p></canvas>
</div>
