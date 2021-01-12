<script>
  import { onMount } from 'svelte'
  import { chart } from 'chart.js'

  export let data

  function createChart() {
    let ctx = document.getElementById('myBarChart').getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Spring","Summer","Fall"'],
        datasets: [
          {
            label: 'Aantal ritten',
            data: [700, 800, 200],
            backgroundColor: [
              'rgba(236, 78, 78, 0.8)',
              'rgba(92, 190, 86, 0.8)',
              'rgba(236, 163, 78, 0.8)',
            ],
            borderColor: [
              // 'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        onResize: null,
      },
    })
  }

  onMount(createChart)
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
