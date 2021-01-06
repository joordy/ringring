<script>
  import FormElement from '@/components/atoms/FormElement.svelte'
  import FormSubmit from '@/components/atoms/FormSubmit.svelte'
  // import { mainModule } from 'process'
  //   let formLabel = 'email'
  //   let inputType = 'text'
  //   let placeHolder = 'johndoe@mail.com'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  form {
    fieldset {
      border: none;
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
        font-weight: 700;
        &::after {
          padding-left: 5px;
          font-family: FontAwesome;
          content: '\f061';
        }
      }
    }
  }
</style>

<form action="">
  <fieldset>
    <FormElement
      formLabel={'email'}
      labelName={'E-mail'}
      inputType={'text'}
      placeHolder={'johndoe@mail.com'}
    />
    <FormElement
      formLabel={'wachtwoord'}
      labelName={'Wachtwoord'}
      inputType={'password'}
      placeHolder={'Voer je wachtwoord in'}
    />
    <div>
      <input type="checkbox" />
      <label for="keep">Bewaar mijn gegevens</label>
    </div>
    <FormSubmit submitText={'submit'} valueText={'inloggen'} />
  </fieldset>

  <p>Heb je nog geen account? <a>Schrijf je in</a></p>
  <p><a>Wachtwoord vergeten?</a></p>
</form>
