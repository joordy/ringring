<script>
  let title = 'Aantal Fietsers'
  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'gisteren'
</script>

<style lang="scss">
  article {
    width: 100%;
    height: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    div {
      margin: 15px 20px;
      h4,
      h5 {
        color: #c4c4c4;
      }
      span {
        font-weight: 700;
        font-size: 2em;
      }
      h5 {
        margin-top: 5px;
      }
    }
  }
</style>

<article>
  <div>
    <h4>{title}</h4>
    <span>{valuenumber}</span>
    <h5>+{compared} t.o.v. {timestamp}</h5>
  </div>
</article>
