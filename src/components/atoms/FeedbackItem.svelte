<style lang="scss">
  section {
    width: 95%;
    height: 175px;
    margin: 2em auto 0.9em auto;
    border-bottom: 1px solid #c4c4c4;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-gap: 30px;
    .text {
      .tags {
        display: flex;
        h4 {
          padding: 5px 12px;
          margin: 0em 1em 1em 0em;
          border: 1px solid #c4c4c4;
          border-radius: 3px;
          font-size: 14px;
        }
      }
      p {
        width: 70%;
        font-size: 1em;
      }
      .timestamp {
        h5 {
          margin-top: 30px;
          font-size: 12px;
          color: #c4c4c4;
        }
      }
    }
    .image {
      div {
        width: 100%;
        height: 100%;
        background-color: hotpink;
      }
    }
  }
</style>

<section>
  <article class="text">
    <div class="tags">
      <h4>#fietspad</h4>
      <h4>#oversteekpunt</h4>
    </div>
    <p>
      Een onhandige indeling van het fietspad, waardoor je niet veilig kan
      oversteken.
    </p>
    <div class="timestamp">
      <h5>12 minuten geleden</h5>
    </div>
  </article>
  <article class="image">
    <div />
  </article>
</section>
