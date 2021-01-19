<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  fieldset {
    border: none;
    div {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: $m20;
        label {
          display: block;
          font-weight: $extra-bold;
          margin-bottom: $m5;
        }
        input[type='email'],
        input[type='password'] {
          width: calc(100% - 10px);
          padding: $m10 $m5;
          border-radius: $borderS;
          border: 1px solid #c4c4c4;
          &:focus {
            border: 1px solid $ui-dark-blue;
          }
        }
      }
    }
    button {
      background: none;
      border: none;
      width: 100%;
      display: block;
      background-color: $ui-traffic-red;
      color: $ui-white;
      padding: $m10 0;
      border-radius: $borderS;
      margin-bottom: $m10;
      @include darkMode {
        background-color: $darkui-blue;
      }
    }
  }
  div {
    margin-bottom: $m20;
    &:nth-of-type(3) {
      display: flex;
      input[type='checkbox'] {
        height: 24px;
        width: 24px;
        border-radius: $borderS;
        border: 1px solid $ui-grey;
      }
      label {
        font-weight: $medium;
        color: $ui-grey;
        margin-left: $m10;
      }
    }
  }

  p {
    text-align: right;
    font-size: $small-font-size;
    margin: $m5 0;
    span {
      @include darkMode {
        color: $darkui-blue;
      }
      color: $ui-traffic-red;
      font-weight: $extra-bold;
      &::after {
        padding-left: $m5;
        font-family: FontAwesome;
        content: '\f061';
      }
    }
  }
  a {
    text-align: center;
    display: block;
    margin-top: $m50;
  }
</style>

<fieldset>
  <div>
    <label for="email">E-mail</label>
    <input type="email" placeholder="Vul je e-mailadress in" />
  </div>
  <div>
    <label for="wachtwoord">Wachtwoord</label>
    <input type="password" placeholder="Voer je wachtwoord in" />
  </div>

  <button>inloggen</button>
  <div>
    <input type="checkbox" />
    <label for="keep">Bewaar mijn gegevens</label>
  </div>
</fieldset>

<p>Heb je nog geen account? <span>Schrijf je in</span></p>
<p><span>Wachtwoord vergeten?</span></p>

<a href="/dashboard">Go quickly to dashboard</a>
