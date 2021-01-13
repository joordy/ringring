<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: none;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $ui-red;
    z-index: 100;
    place-items: center;
    @include size-toSmall {
      display: block;
      display: grid;
    }
    article {
      width: 90vw;
      max-width: 380px;
      height: 260px;
      background-color: $ui-white;
      text-align: center;
      position: relative;
      border-radius: 10px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 10px 0 rgba(0, 0, 0, 0.19);
      div {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: -60px;
      }
      h2 {
        font-weight: $bold;
        margin: $m50 $m20 0 $m20;
        font-size: $h4-size;
      }
      h3 {
        margin: $m15 $m20 0 $m20;
        font-size: $h6-size;
      }
    }
  }
</style>

<section>
  <article>
    <div>
      <svg
        width="152"
        height="98"
        viewBox="0 0 152 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="38.1526" width="111.466" height="98" rx="49" fill="#C4C4C4" />
        <rect
          x="69.5725"
          y="65.084"
          width="49.3741"
          height="16.458"
          rx="8.22901"
          fill="#010101"
        />
        <rect
          x="94.3845"
          y="66.1775"
          width="8.94713"
          height="6.52683"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="103.581"
          y="66.1775"
          width="8.94713"
          height="6.52683"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <path
          d="M112.779 72.7043V66.179C115.593 66.2453 117.853 68.5472 117.853 71.3771V72.7043H112.779Z"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <path
          d="M75.7402 66.179V72.7043H70.6655V71.3771C70.6655 68.5472 72.9262 66.2454 75.7402 66.179Z"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="85.1875"
          y="66.1775"
          width="8.94713"
          height="6.52683"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="75.9902"
          y="66.1775"
          width="8.94713"
          height="6.52683"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="0.125"
          y="-0.125"
          width="8.94713"
          height="6.52683"
          transform="matrix(1 0 0 -1 94.2595 80.324)"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="0.125"
          y="-0.125"
          width="8.94713"
          height="6.52683"
          transform="matrix(1 0 0 -1 103.456 80.324)"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <path
          d="M112.778 73.9221V80.4475C115.592 80.3811 117.853 78.0792 117.853 75.2493V73.9221H112.778Z"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <path
          d="M75.7402 80.4475V73.9221H70.6655V75.2493C70.6655 78.0792 72.9262 80.3811 75.7402 80.4475Z"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="0.125"
          y="-0.125"
          width="8.94713"
          height="6.52683"
          transform="matrix(1 0 0 -1 85.062 80.324)"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <rect
          x="0.125"
          y="-0.125"
          width="8.94713"
          height="6.52683"
          transform="matrix(1 0 0 -1 75.8652 80.324)"
          fill="white"
          stroke="#AEA8A5"
          stroke-width="0.25"
        />
        <path
          d="M35.8708 47.4549C40.6065 50.2345 40.8039 47.9512 40.3106 46.4622C40.3106 41.6973 43.2704 41.8296 44.7503 42.4914C46.5591 53.2456 49.782 74.4563 48.2034 73.2651C46.6249 72.0738 42.2838 59.8636 40.3106 53.9074C36.7588 51.1278 30.6088 55.0655 27.9778 57.3818C24.8536 61.6835 16.4345 69.0957 7.75228 64.3307C-3.10047 58.3745 -0.140631 50.433 2.32591 42.4914C4.79244 34.5498 14.9618 33.2902 21.5649 38.0242C23.2711 39.2475 29.9511 43.9804 35.8708 47.4549Z"
          fill="#C4C4C4"
        />
        <path
          d="M38.1526 45.4434C38.1526 20.3457 58.4983 0 83.596 0H106.374C130.257 0 149.618 19.3612 149.618 43.2445V43.2445C149.618 45.8034 147.544 47.8779 144.985 47.8779H40.5871C39.2425 47.8779 38.1526 46.7879 38.1526 45.4434V45.4434Z"
          fill="#BD282E"
        />
        <path
          d="M38.1526 46.3817C73.9363 48.3766 146.327 50.7954 149.618 44.5115"
          stroke="white"
          stroke-width="4"
        />
        <ellipse
          cx="76.3053"
          cy="44.5114"
          rx="14.2137"
          ry="13.8397"
          fill="white"
        />
        <circle cx="76.6797" cy="49" r="4.8626" fill="black" />
        <ellipse
          cx="111.466"
          cy="44.5114"
          rx="14.2137"
          ry="13.8397"
          fill="white"
        />
        <circle cx="111.092" cy="49" r="4.8626" fill="black" />
      </svg>
    </div>
    <h2>Helaas, je device is niet geschikt om het dashboard te bekijken.</h2>
    <h3>
      Het ziet ernaar uit dat het device te klein is. Schakel over naar een
      groter device voor een betere ervaring.
    </h3>
  </article>
  <!-- /screen -->
</section>
