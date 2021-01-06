<script>
  let src = 'ringring-logo.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .loginpage {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 100vh;
    h2 {
      width: 100%;
      font-size: 32px;
      font-weight: 700;
      margin: 64px 0 20px 0;
    }
    h3 {
      font-size: 16px;
      opacity: 0.6;
      font-weight: 700;
      margin-bottom: 70px;
    }
    article {
      display: grid;
      place-items: center;
      &:nth-of-type(1) {
        color: $text-dark-blue;
        background-color: white;
        section {
          width: 350px;
          .logo {
            width: 100%;
            display: flex;
            img {
              height: 40px;
            }
            h1 {
              line-height: 40px;
              font-size: 20px;
              font-weight: 700;
              margin-left: 10px;
            }
          }

          form {
            fieldset {
              border: none;
            }
            div {
              margin-bottom: 20px;
              label {
                display: block;
                font-weight: 700;
                margin-bottom: 5px;
              }
              input[type='text'] {
                width: calc(100% - 20px);
                padding: 5px 10px;
                border-radius: 5px;
                border: 1px solid #c4c4c4;
              }
              &:nth-of-type(3) {
                display: flex;
                input[type='checkbox'] {
                  height: 24px;
                  width: 24px;
                  border-radius: 5px;
                  border: 1px solid #c4c4c4;
                }
                label {
                  font-weight: 400;
                  color: #909090;
                  margin-left: 10px;
                }
              }
            }
            input[type='submit'] {
              background: none;
              border: none;
              width: 100%;
              display: block;
              background-color: $ui-dark-blue;
              color: $text-soft-white;
              padding: 10px 0;
              border-radius: 5px;
              margin-bottom: 10px;
            }
            p {
              text-align: right;
              font-size: 14px;
              margin: 5px 0;
              a {
                font-weight: 700;
                &::after {
                  padding-left: 5px;
                  font-family: FontAwesome;
                  content: '\f061';
                }
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        color: $text-soft-white;
        background-color: $ui-dark-blue;
        padding: 0 150px;
        section {
          &:nth-of-type(1) {
            div {
              &:nth-of-type(1) {
                width: 195px;
                height: 195px;
                background-color: #c4c4c4;
                opacity: 0.2;
              }
              &:nth-of-type(2) {
                width: 430px;
                height: 480px;
                background-color: white;
              }
              &:nth-of-type(3) {
                width: 195px;
                height: 195px;
                background-color: #c4c4c4;
                opacity: 0.2;
              }
            }
          }
          &:nth-of-type(2) {
            width: 350px;
            margin: 0 auto;
            text-align: center;
          }
        }
      }
    }
  }
</style>

<section class="loginpage">
  <article>
    <section class="loginwrapper">
      <div class="logo">
        <img {src} alt="RingRing Logo" />
        <h1>Ring-Ring</h1>
      </div>
      <!-- <div> -->
      <h2>Inloggen</h2>
      <h3>
        Log in met het account van de gemeente Amsterdam gedurende je
        registratie.
      </h3>
      <!-- </div> -->

      <form action="">
        <fieldset>
          <div>
            <label for="email">Email</label>
            <input type="text" placeholder="johndoe@mail.com" />
          </div>
          <div>
            <label for="email">Wachtwoord</label>
            <input type="text" placeholder="Voer je wachtwoord in" />
          </div>
          <div>
            <input type="checkbox" />
            <label for="keep">Bewaar mijn gegevens</label>
          </div>
          <input type="submit" />
        </fieldset>
        <p>Heb je nog geen account? <a>Schrijf je in</a></p>
        <p><a>Wachtwoord vergeten?</a></p>
      </form>
    </section>
  </article>
  <article>
    <!-- <section> -->
    <section>
      <div>
        <!-- test -->
      </div>
      <div>
        <!-- test -->
      </div>
      <div>
        <!-- test -->
      </div>
      <!-- test -->
    </section>
    <section>
      <h2>Keeping the overview.</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl
        vivamus a, tincidunt ultrices.
      </h3>
    </section>
    <!-- </section> -->
  </article>
</section>
<!-- <h1>Great success!</h1> -->
