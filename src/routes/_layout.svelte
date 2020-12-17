<script>
  import GlobalNav from '../components/organisms/GlobalNav.svelte'
  import { cleanMyData } from '../modules/fetchData.js'

  // const cleanMyData = async () => {
  //   const res = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/joordy/a143d68573aa3dcaadcb34defb2745a4/raw/43267958a9135359da69478b089e0c360b441af3/ringring.json`
  //   )
  //   const text = await res.text()

  //   if (res.ok) {
  //     return text
  //   } else {
  //     throw new Error(text)
  //   }
  // }

  let promise = cleanMyData()
  export let segment
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
</style>

{#await promise}
  <p style="display: grid; place-items: center; height: 100vh;">
    ...Receiving data
  </p>
{:then number}
  <GlobalNav {segment} />

  <main>
    <slot data={number} />
  </main>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!-- {#await promise}
  <p style="display: grid; place-items: center; height: 100vh;">
    ...Receiving data
  </p>
{:then dataset}
  <GlobalNav {segment} />

  <main>
    <slot data={dataset} />
  </main>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await} -->
