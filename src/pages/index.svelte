<script>
  import { onMount } from 'svelte'
  // import { receiveData } from '../modules/receiveData.js'

  // const abc = receiveData()
  // console.log(abc)

  let data
  onMount(async () => {
    const res = await fetch('https://opendata.rdw.nl/resource/mz4f-59fw.json')
    data = await res.json()
    console.log(data)
  })
</script>

<section>
  <h1>This is the index (home)</h1>

  <a href="/about">joejoe</a>
</section>
