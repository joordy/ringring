<script>
  import VizTitle from '@/components/atoms/VizHeader.svelte'

  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let title

  function createChart() {
    let ctx = document.getElementById('lineChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Augustus',
          'September',
          'Oktober',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Dit is een dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 42, 30, 25, 20, 40],
          },
        ],
      },
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
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

  div {
    width: 100%;
    height: 100%;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    article {
      width: calc(100% - 30px);
      height: calc(100% - 40px);
      padding: $margin-3 $margin-4;

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
    }
  }
</style>

<div>
  <article>
    <VizTitle {title} />
    <div class="graph">
      <canvas id="lineChart" aria-label="Chart about traffic" role="chart"><p>
          Your browser does not support this chart. Please visit a recent
          updated browser.
        </p></canvas>
    </div>
  </article>
</div>
