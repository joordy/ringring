<script>
  import { FeedbackFilter } from '@/components/molecules/allElements.js'
  import {
    Responses,
    ResponseMap,
    TextViz,
  } from '@/components/atoms/charts/allElements.js'
  import {
    Container,
    ContainerRes,
    VizHeader,
  } from '@/components/atoms/elements/allElements.js'

  export let data

  let feedbackData = data.feedbackData
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
    section {
      width: 100%;
      // height: 100%;
      display: grid;
      // grid-template-columns: 5fr 3fr 3fr;
      grid-template-columns: 2fr 2fr;
      grid-gap: $m30;
      article {
        background-color: white;
        overflow: hidden;
        @include darkMode {
          background-color: $darkui-black;
          color: $darkui-white;
        }
        &:nth-of-type(1) {
          grid-column: 1;
        }
        &:nth-of-type(2) {
          grid-column: 2;
        }
        &:nth-of-type(3) {
          grid-column: 1;
        }
        &:nth-of-type(4) {
          grid-column: 2;
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          height: 160px;
        }
        &:nth-of-type(1),
        &:nth-of-type(2) {
          height: 41.3vh;
          @media screen and (min-height: 800px) {
            height: 44vh;
          }
          @media screen and (min-height: 850px) {
            height: 47.3vh;
          }
          @media screen and (min-height: 900px) {
            height: 50vh;
          }
          @media screen and (min-height: 950px) {
            height: 53vh;
          }
          @media screen and (min-height: 1000px) {
            height: 54vh;
          }
          @media screen and (min-height: 1050px) {
            height: 57vh;
          }
          @media screen and (min-height: 1100px) {
            height: 59vh;
          }
          @media screen and (min-height: 1150px) {
            height: 61vh;
          }
          @media screen and (min-height: 1250px) {
            height: 63vh;
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
        <div style="margin: 1em 0 1em 0">
          {#each feedbackData as item}
            <Responses data={item} />
          {/each}
        </div>
      </ContainerRes>
    </article>
    <article>
      <Container>
        <ResponseMap {data} />
      </Container>
    </article>
    <article>
      <Container>
        <VizHeader title="Feedback per stadsdeel" />
        <TextViz data={data.charts.feedbackLocationChart} />
      </Container>
    </article>
    <article>
      <Container>
        <VizHeader title="Feedback per tag-item" />
        <TextViz data={data.charts.subjectChart} />
      </Container>
    </article>
  </section>
</section>
