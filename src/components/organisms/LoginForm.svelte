<script>
  import FormHeader from '@/components/molecules/FormHeader.svelte'
  import FormField from '@/components/molecules/FormField.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 100%;
    background-color: $ui-white;
    display: grid;
    place-items: center;
    @include darkMode {
      background-color: $darkui-black;
    }
    .form {
      width: 70%;
      max-width: 400px;
      @include darkMode {
        color: $darkui-white;
      }
    }
  }
</style>

<article>
  <div class="form">
    <FormHeader />
    <FormField />
  </div>
</article>
