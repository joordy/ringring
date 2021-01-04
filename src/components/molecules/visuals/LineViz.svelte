<script>
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
      h4,
      h5 {
        color: #c4c4c4;
      }
      span {
        font-weight: $bold;
        font-size: $h2-size;
      }
      h5 {
        margin-top: $margin-1;
      }
    }
  }
</style>

<div>
  <article>
    <h4>{title}</h4>
    <canvas id="lineChart" height="320" />
  </article>
</div>
