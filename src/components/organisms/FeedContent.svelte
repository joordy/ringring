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
        &:nth-of-type(1),
        &:nth-of-type(2) {
          height: 43vh;
          @media screen and (min-height: 850px) {
            height: 47vh;
          }
          @media screen and (min-height: 1000px) {
            height: 53vh;
          }
          @media screen and (min-height: 1100px) {
            height: 56vh;
          }
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          height: 160px;
        }
      }
    }
  } // &:nth-of-type(1) {
  //   grid-column: 1;
  //   grid-row: 1 / 3;
  // }
  // &:nth-of-type(2) {
  //   grid-column: 2;
  //   grid-row: 1 / 3;
  // }
  // &:nth-of-type(3) {
  //   grid-column: 3;
  //   grid-row: 1 / 3;
  // }
  // &:nth-of-type(4) {
  //   grid-column: 1 / 4;
  //   grid-row: 3 / 5;
  // }
  // &:nth-of-type(1),
  // &:nth-of-type(2),
  // &:nth-of-type(3) {
  //   height: 32vh;
  //   @media screen and (min-height: 850px) {
  //     height: 34.5vh;
  //   }
  //   @media screen and (min-height: 1000px) {
  //     height: 35vh;
  //   }
  //   @media screen and (min-height: 1100px) {
  //     height: 37vh;
  //   }
  // }
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
    <!-- <article id="vizOne">
      <ContainerRes>
        <VizHeader title="Feedback reacties" />
        <div>
          {#each feedbackData as item}
            <Responses data={item} />
          {/each}
        </div>
      </ContainerRes>
    </article>
    <article id="vizTwo">
      <Container>
        <VizHeader title="Feedback per stadsdeel" />

        <TextViz data={data.charts.feedbackLocationChart} />
      </Container>
    </article>
    <article id="vizThree">
      <Container>
        <VizHeader title="Feedback per tag-item" />
        <TextViz data={data.charts.subjectChart} />
      </Container>
    </article>
    <article id="vizFour">
      <Container>
        <ResponseMap {data} />
      </Container>
    </article> -->

    <!-- <article id="vizOne">
      <Container>
        <ResponseMap {data} />
      </Container>
    </article>
    <article id="vizTwo">
      <ContainerRes>
        <VizHeader title="Feedback reacties" />
        <div>
          {#each feedbackData as item}
            <Responses data={item} />
          {/each}
        </div>
      </ContainerRes>
    </article>
    <article id="vizThree">
      <Container>
        <VizHeader title="Feedback per stadsdeel" />

        <TextViz data={data.charts.feedbackLocationChart} />
      </Container>
    </article>
    <article id="vizFour">
      <Container>
        <VizHeader title="Feedback per tag-item" />
        <TextViz data={data.charts.subjectChart} />
      </Container>
    </article> -->
  </section>
</section>
