<script>
  export let slug
</script>

<h1>Blog article: {slug}</h1>

{#each [0, 1, 2, 3, 4, 5] as i}
  <p>Dummy text: {i} for slug {slug}</p>
{/each}
