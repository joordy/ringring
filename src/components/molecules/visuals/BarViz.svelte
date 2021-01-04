<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let title
  function createChart() {
    let ctx = document.getElementById('myBarChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          '0-5 KM',
          '6-10 KM',
          '11-15 KM',
          '16-20 KM',
          '21-25 KM',
          '26+ KM ',
        ],
        datasets: [
          {
            label: 'Aantal ritten',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
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
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    article {
      margin: $margin-3 $margin-4;
      max-width: 100%;
      max-height: 100%;
      h4 {
        color: #c4c4c4;
        margin-bottom: $margin1;
      }
      canvas {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>

<div id="barchart">
  <article class="barViz">
    <h4>{title}</h4>
    <canvas id="myBarChart" height="300px" />
  </article>
</div>
