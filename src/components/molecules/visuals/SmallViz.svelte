<script>
  export let title
  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'gisteren'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    article {
      margin: $margin-3 $margin-4;
      h4,
      h5 {
        color: #c4c4c4;
      }
      span {
        font-weight: $bold;
        font-size: $h2-size;
      }
      h5 {
        margin-top: $margin-1;
      }
    }
  }
</style>

<div>
  <article>
    <h4>{title}</h4>
    <span>{valuenumber}</span>
    <h5>+{compared} t.o.v. {timestamp}</h5>
  </article>
</div>
