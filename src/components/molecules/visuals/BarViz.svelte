<script>
  import VizTitle from '@/components/atoms/VizHeader.svelte'

  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let title
  export let data

  // function allDistances() {
  //   data.forEach((elem) => {
  //     return elem.properties.distance
  //   })
  // }
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
    }
  }
</style>

<div id="barchart">
  <article class="barViz">
    <VizTitle {title} />
    <div class="graph">
      <canvas id="myBarChart" aria-label="Chart about rides" role="chart"><p>
          Your browser does not support this chart. Please visit a recent
          updated browser.
        </p></canvas>
    </div>
  </article>
</div>
