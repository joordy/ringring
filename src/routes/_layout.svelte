<!--<script ✂prettier:content✂="CiAgaW1wb3J0IEVycm9yUGFnZSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0cy9FcnJvclBhZ2Uuc3ZlbHRlJwogIGltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0cy9Mb2FkaW5nUGFnZS5zdmVsdGUnCgogIGltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi9zdG9yZXMvZmV0Y2hlci5qcycKICBpbXBvcnQgeyBlbmRwb2ludCB9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMvZW50cnkuanMnCgogIGV4cG9ydCBsZXQgc2VnbWVudAogIGxldCByZXNwb25zZSA9IGdldERhdGEoZW5kcG9pbnQpCg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>{#await $response}
  <LoadingPage />
{:then data}
  {console.log(data)}
  <slot {data} {segment} />
{:catch error}
  <ErrorPage {error} />
{/await} -->
<script>
  import LoadingPage from '@/components/layouts/LoadingPage.svelte'
  import ErrorPage from '@/components/layouts/ErrorPage.svelte'
  // import { getData } from '../stores/fetcher';

  let promise = getData()

  async function getData() {
    const res = await fetch(
      'https://cors-anywhere.herokuapp.com/http://ringring-data.jorrr.nl/data-ringring.json'
    )
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data)
    }
  }

  export let segment
</script>

{#await promise}
  <LoadingPage />
{:then dataset}
  {console.log(dataset)}
  <slot data={dataset} {segment} />
{:catch error}
  <ErrorPage {error} />
{/await}
