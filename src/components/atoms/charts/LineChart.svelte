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
          '01-01',
          '02-01',
          '03-01',
          '04-01',
          '05-01',
          '06-01',
          '07-01',
          '08-01',
          '09-01',
          '10-01',
          '11-01',
          '12-01',
          '13-01',
          '14-01',
          '15-01',
          '16-01',
          '17-01',
          '18-01',
          '19-01',
          '20-01',
          '21-01',
          '22-01',
          '23-01',
          '24-01',
          '25-01',
          '26-01',
          '27-01',
          '28-01',
          '29-01',
          '30-01',
          '31-01',
        ],
        datasets: [
          {
            label: 'Drukte in de maand januari',
            fill: false,
            // lineTension: 0.6,
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
