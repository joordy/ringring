<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  // form {
  fieldset {
    border: none;
    div {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: 20px;
        label {
          display: block;
          font-weight: 700;
          margin-bottom: 5px;
        }
        input[type='email'],
        input[type='password'] {
          width: calc(100% - 10px);
          padding: 10px 5px;
          border-radius: 5px;
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
      padding: 10px 0;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
  div {
    margin-bottom: 20px;
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

  p {
    text-align: right;
    font-size: 14px;
    margin: 5px 0;
    a {
      color: $ui-traffic-red;
      font-weight: 700;
      &::after {
        padding-left: 5px;
        font-family: FontAwesome;
        content: '\f061';
      }
    }
  }
  // }
</style>

<!-- <form action=""> -->
<fieldset>
  <div>
    <label for="email">E-mail</label>
    <input type="email" placeholder="Vul je e-mailadress in" />
  </div>
  <div>
    <label for="wachtwoord">Wachtwoord</label>
    <input type="password" placeholder="Voer je wachtwoord in" />
  </div>

  <!-- <input type="submit" value="Inloggen" /> -->
  <button>inloggen</button>
  <div>
    <input type="checkbox" />
    <label for="keep">Bewaar mijn gegevens</label>
  </div>
</fieldset>

<p>Heb je nog geen account? <a>Schrijf je in</a></p>
<p><a>Wachtwoord vergeten?</a></p>

<!-- </form> -->
