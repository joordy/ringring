<script>
  import FeedbackFilter from '@/components/molecules/FeedbackFilter.svelte'
  import Responses from '@/components/atoms/charts/Responses.svelte'
  import ResponseMap from '@/components/atoms/charts/ResponseMap.svelte'
  import Stadsdeel from '@/components/atoms/charts/Stadsdeel.svelte'
  import TagViz from '@/components/atoms/charts/TagViz.svelte'
  import Container from '@/components/atoms/elements/Container.svelte'
  // import ContainerFeed from '@/components/atoms/elements/ContainerFeed.svelte'
  import ContainerMap from '@/components/atoms/elements/ContainerMap.svelte'
  import ContainerRes from '@/components/atoms/elements/ContainerRes.svelte'
  import VizHeader from '@/components/atoms/elements/VizHeader.svelte'

  export let data

  let feedbackData = data.feedbackData
  let items = feedbackData
  let activeItem = feedbackData[0]

  const responseChange = (e) => {
    activeItem = e.detail
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .feedback {
    background-color: $ui-softwhite;
    padding: $m30 $m50;
    width: calc(100% - 100px);
    height: 100%;
    @include darkMode {
      background-color: $darkui-softblack;
      color: $darkui-white;
    }
    @media screen and (max-height: 900px) {
      padding: $m15 $m50 $m30 $m50;
    }
    section {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 2fr;
      grid-gap: $m30;
      article {
        background-color: white;
        @include darkMode {
          background-color: $darkui-black;
          color: $darkui-white;
        }
        &:nth-of-type(1) {
          grid-column: 1;
          grid-row: 1;
        }
        &:nth-of-type(2) {
          grid-column: 2;
          grid-row: 1;
        }
        &:nth-of-type(3) {
          grid-column: 1;
          grid-row: 2;
        }
        &:nth-of-type(4) {
          grid-column: 2;
          grid-row: 2;
        }
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4) {
          height: 34vh;
          @media screen and (min-height: 800px) {
            height: 34.7vh;
          }
          @media screen and (min-height: 850px) {
            height: 36vh;
          }
          @media screen and (min-height: 900px) {
            height: 34vh;
          }
          @media screen and (min-height: 950px) {
            height: 35vh;
          }

          @media screen and (min-height: 1050px) {
            height: 36vh;
          }
          @media screen and (min-height: 1100px) {
            height: 37vh;
          }

          @media screen and (min-height: 1250px) {
            height: 38vh;
          }
          @media screen and (min-height: 1350px) {
            height: 39vh;
          }
        }
      }
    }
  }
</style>

<section class="feedback">
  <FeedbackFilter {data} />
  <section class="gridWrapper">
    <article>
      <ContainerRes>
        <VizHeader title="Feedback reacties" />
        <Responses {items} {activeItem} on:responseChange={responseChange} />
      </ContainerRes>
    </article>
    <article>
      <ContainerMap>
        {#if activeItem === feedbackData[0]}
          <ResponseMap data={feedbackData[0]} />
        {:else if activeItem === feedbackData[1]}
          <ResponseMap data={feedbackData[1]} />
        {:else if activeItem === feedbackData[2]}
          <ResponseMap data={feedbackData[2]} />
        {:else if activeItem === feedbackData[3]}
          <ResponseMap data={feedbackData[3]} />
        {:else if activeItem === feedbackData[4]}
          <ResponseMap data={feedbackData[4]} />
        {:else if activeItem === feedbackData[5]}
          <ResponseMap data={feedbackData[5]} />
        {:else if activeItem === feedbackData[6]}
          <ResponseMap data={feedbackData[6]} />
        {:else if activeItem === feedbackData[7]}
          <ResponseMap data={feedbackData[7]} />
        {:else if activeItem === feedbackData[8]}
          <ResponseMap data={feedbackData[8]} />
        {:else if activeItem === feedbackData[9]}
          <ResponseMap data={feedbackData[9]} />
        {:else if activeItem === feedbackData[10]}
          <ResponseMap data={feedbackData[10]} />
        {:else if activeItem === feedbackData[11]}
          <ResponseMap data={feedbackData[11]} />
        {:else if activeItem === feedbackData[12]}
          <ResponseMap data={feedbackData[12]} />
        {:else if activeItem === feedbackData[13]}
          <ResponseMap data={feedbackData[13]} />
        {:else if activeItem === feedbackData[14]}
          <ResponseMap data={feedbackData[14]} />
        {:else if activeItem === feedbackData[15]}
          <ResponseMap data={feedbackData[15]} />
        {:else if activeItem === feedbackData[16]}
          <ResponseMap data={feedbackData[16]} />
        {:else if activeItem === feedbackData[17]}
          <ResponseMap data={feedbackData[17]} />
        {:else if activeItem === feedbackData[18]}
          <ResponseMap data={feedbackData[18]} />
        {:else}
          <ResponseMap data={feedbackData[19]} />
        {/if}
      </ContainerMap>
    </article>
    <article>
      <Container>
        <VizHeader title="Feedback per stadsdeel" />
        <Stadsdeel data={data.charts.feedbackLocationChart} />
      </Container>
    </article>
    <article>
      <Container>
        <VizHeader title="Feedback per tag-item" />
        <TagViz data={data.charts.subjectChart} />
      </Container>
    </article>
  </section>
</section>
