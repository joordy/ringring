<script>
  let currentTime = new Date()
  let currentYear = currentTime.getFullYear()
</script>

<style lang="scss">
  section {
    height: 38px;
    width: calc(100% - 225px);
    position: relative;
    bottom: 220px;
    left: 0;
    @media screen and (max-height: 900px) {
      bottom: 190px;
    }
    p {
      margin: 0;
      padding: 0 0 10px 50px;
      font-size: 12px;
      line-height: 28px;
      color: #c4c4c4;
    }
  }
</style>

<section class="copyright">
  <p>
    Copyright &copy;
    {currentYear}, Marleen Buchner – Meggie Chen – Jordy Fronik. Alle rechten
    voorbehouden.
  </p>
</section>
