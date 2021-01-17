<style lang="scss">
  @import 'src/styles/index.scss';

  .svgAnimation {
    width: 100%;
    height: 35vh;
    position: relative;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    .bikeAnim {
      position: absolute;
      bottom: 110px;
      svg {
        width: 100vw;
        #Bike {
          animation: bicycle 4s linear infinite;
          transform-origin: center;
        }
        #Frontwheel,
        #Backwheel,
        #Crank {
          animation: wheel 1.7s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        #Frontwheel {
          animation: wheelLost 4s linear infinite;
          transform-origin: center;
        }
      }
    }
    .road {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: $m30;
      svg {
        width: 120%;
        margin-left: -10%;
      }
    }
  }

  @keyframes bicycle {
    0% {
      transform: translateX(-60vw);
    }
    100% {
      transform: translateX(60vw);
    }
  }
  @keyframes wheel {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  @keyframes wheelLost {
    from {
      transform: translateX(0) rotateZ(0deg);
    }
    to {
      transform: translateX(200px) rotateZ(360deg);
    }
  }
</style>

<section class="svgAnimation">
  <div class="bikeAnim">
    <svg
      width="348"
      height="221"
      viewBox="0 0 348 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Bike">
        <g id="Frontwheel">
          <path
            id="Exclude"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M278.706 221C316.952 221 347.957 189.995 347.957 151.749C347.957 113.503 316.952 82.498 278.706 82.498C240.459 82.498 209.454 113.503 209.454 151.749C209.454 189.995 240.459 221 278.706 221ZM278.518 214.036C313.046 214.036 341.037 186.046 341.037 151.518C341.037 116.99 313.046 88.9999 278.518 88.9999C243.99 88.9999 216 116.99 216 151.518C216 186.046 243.99 214.036 278.518 214.036Z"
            fill="#33415C"
          />
          <path
            id="Vector 28"
            d="M268.986 200.832C268.985 202.696 268.644 204.078 268.014 204.719C266.948 205.803 239.51 199.429 229.46 172.453C219.051 144.512 232.299 121.961 233.245 122.353C234.596 122.912 236.975 124.243 237.976 124.922C239.553 125.992 224.769 147.666 235.696 171.431C247.367 196.812 268.986 199.547 268.986 200.832Z"
            fill="#68758E"
          />
          <path
            id="Vector 31"
            d="M287.696 103.508C287.696 101.643 288.037 100.262 288.668 99.6204C289.733 98.5364 317.171 104.91 327.221 131.887C337.63 159.828 324.383 182.379 323.436 181.987C322.085 181.428 319.706 180.097 318.705 179.418C317.128 178.348 331.912 156.674 320.985 132.909C309.314 107.528 287.695 104.793 287.696 103.508Z"
            fill="#68758E"
          />
          <ellipse
            id="Ellipse 52"
            cx="278.948"
            cy="151.992"
            rx="5.83169"
            ry="5.83166"
            fill="#33415C"
          />
        </g>
        <g id="Backwheel">
          <path
            id="Exclude_2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.2513 221C107.498 221 138.503 189.995 138.503 151.749C138.503 113.503 107.498 82.498 69.2513 82.498C31.0049 82.498 0 113.503 0 151.749C0 189.995 31.0049 221 69.2513 221ZM69.5185 214.036C104.047 214.036 132.037 186.046 132.037 151.518C132.037 116.99 104.047 88.9999 69.5185 88.9999C34.9905 88.9999 7 116.99 7 151.518C7 186.046 34.9905 214.036 69.5185 214.036Z"
            fill="#33415C"
          />
          <ellipse
            id="Ellipse 51"
            cx="69.4948"
            cy="151.992"
            rx="5.83169"
            ry="5.83166"
            fill="#353434"
          />
          <path
            id="Vector 32"
            d="M59.5312 200.832C59.5308 202.696 59.1901 204.078 58.5593 204.719C57.494 205.803 30.0554 199.429 20.0054 172.453C9.5965 144.512 22.8442 121.961 23.7905 122.353C25.1417 122.912 27.521 124.243 28.5218 124.922C30.0989 125.992 15.3143 147.666 26.242 171.431C37.9126 196.812 59.5316 199.547 59.5312 200.832Z"
            fill="#68758E"
          />
          <path
            id="Vector 33"
            d="M78.2419 103.508C78.2424 101.643 78.583 100.262 79.2139 99.6204C80.2792 98.5364 107.718 104.91 117.768 131.887C128.177 159.828 114.929 182.379 113.983 181.987C112.632 181.428 110.252 180.097 109.251 179.418C107.674 178.348 122.459 156.674 111.531 132.909C99.8606 107.528 78.2416 104.793 78.2419 103.508Z"
            fill="#68758E"
          />
        </g>
        <g id="Crank">
          <rect
            id="Rectangle 183"
            width="22.8408"
            height="3.4018"
            transform="matrix(0.998598 0.0529272 -0.0529302 0.998598 165.18 128)"
            fill="#8C98B2"
          />
          <path
            id="Rectangle 186"
            d="M164.73 156.094L163.81 155.73L176.79 130.343L178.09 131.091L164.73 156.094Z"
            fill="black"
          />
          <circle
            id="Ellipse 50"
            cx="163.992"
            cy="155.582"
            r="18.9221"
            fill="#8C98B2"
          />
          <path
            id="Rectangle 185"
            d="M164.151 155.453L165.071 155.817L152.091 181.204L150.79 180.456L164.151 155.453Z"
            fill="black"
          />
          <rect
            id="Rectangle 184"
            x="140.32"
            y="178.066"
            width="22.8408"
            height="3.4018"
            transform="rotate(3.07274 140.32 178.066)"
            fill="#8C98B2"
          />
        </g>
        <g id="Frame">
          <rect
            id="Rectangle 181"
            x="253.346"
            y="24.1787"
            width="6.30738"
            height="17.8709"
            fill="#8C98B2"
          />
          <path
            id="Rectangle 180"
            d="M131.213 35.9111L136.072 35.9112L139.203 56.9446L134.343 56.9446L131.213 35.9111Z"
            fill="#8C98B2"
          />
          <path
            id="Ellipse 49"
            d="M160.838 35.586C160.838 38.9566 154.828 45.2029 139.388 45.2029C111.43 45.2029 111.43 42.2438 111.43 35.586C111.43 28.9283 111.43 25.2295 139.388 25.2295C154.828 25.2295 160.838 32.2155 160.838 35.586Z"
            fill="#35435E"
          />
          <path
            id="Vector 23"
            d="M133.053 55.3996H139.84L141.166 61.226L251.338 51.0298C251.338 51.0298 250.853 38.7702 251.338 38.4058C252.307 37.6774 260.064 37.6382 260.791 38.4058C261.276 38.9176 260.791 49.5734 260.791 49.5734C260.791 49.5734 264.821 49.1712 267.093 48.6024C267.093 48.6024 268.988 48.3596 269.517 54.186C269.914 58.5558 267.82 59.7694 267.82 59.7694H260.791C260.791 59.7694 282.121 144.738 282.606 148.622C283.091 152.507 282.728 154.145 279.455 154.692C276.181 155.238 275.32 153.436 274.364 150.564C273.61 148.297 251.338 62.4398 251.338 62.4398L173.531 156.634L170.38 147.166L244.551 59.7694L142.748 69.4801L159.958 143.767H152.201L135.961 69.4801L74.8799 150.322H161.412L163.109 155.905C163.109 155.905 69.1094 156.012 68.5778 155.905C67.3661 155.663 65.3589 153.691 66.6387 150.808C67.6083 148.623 134.265 61.226 134.265 61.226L133.053 55.3996Z"
            fill="#EC4E4E"
          />
          <path
            id="Rectangle 182"
            d="M253.035 0C253.035 0 251.37 24.2572 253.035 24.813C255.549 25.6527 259.104 25.6985 260.642 24.813C261.935 24.0686 260.404 11.6621 260.642 10.4215C261.022 8.43642 265.134 9.02958 268.012 8.93268C270.89 8.83578 275.381 9.9252 275.381 9.9252C275.381 9.9252 281.626 11.414 282.513 18.3616C283.338 24.813 281.8 26.0537 279.661 27.5424C277.783 28.8489 270.911 26.5499 270.151 27.7906C269.2 29.3433 269.574 32.505 270.151 34.2419C270.627 35.6735 284.178 38.7083 287.981 27.7906C287.981 27.7906 291.018 20.3467 287.03 12.4065C283.042 4.46634 273.955 2.4813 273.955 2.4813C267.828 0.882437 253.035 0 253.035 0Z"
            fill="#35435E"
          />
        </g>
      </g>
    </svg>
  </div>
  <div class="road">
    <svg
      width="1429"
      height="69"
      viewBox="0 0 1429 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 410">
        <rect
          id="Rectangle 351"
          width="362"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 -14 5)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 352"
          width="362"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 437 5)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 353"
          width="362"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 888 5)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 359"
          width="362"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 347 69)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 360"
          width="203"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 920 58)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 366"
          width="83"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 1077 32)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 367"
          width="83"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 208 64)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 368"
          width="43"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 62 42)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 370"
          width="43"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 1361 19)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 354"
          width="244"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 178 37)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 369"
          width="244"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 1185 45)"
          fill="#C4C4C4"
        />
        <rect
          id="Rectangle 355"
          width="244"
          height="5"
          rx="2"
          transform="matrix(1 0 0 -1 625 37)"
          fill="#C4C4C4"
        />
      </g>
    </svg>
  </div>
</section>
