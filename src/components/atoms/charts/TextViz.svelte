<script>
  export let data

  let labels = Object.keys(data)
  let values = Object.values(data)
</script>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    article {
      ul {
        padding: 0;
        margin: 0;
        li {
          list-style-type: none;
        }
        .value {
          text-align: right;
        }
      }
    }
  }
</style>

<div>
  <article>
    <ul>
      {#each labels as item}
        <li>{item}</li>
      {/each}
    </ul>
  </article>
  <article>
    <ul>
      {#each values as value}
        <li class="value">{value}</li>
      {/each}
    </ul>
  </article>
</div>
