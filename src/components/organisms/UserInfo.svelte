<script>
  let user = {
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    position: absolute;
    top: 42px;
    right: 50px;
    display: flex;
    h4 {
      font-size: $Heading4;
      font-weight: $bold;
      line-height: 48px;
      margin-right: $m15;
    }
    div {
      height: 48px;
      width: 48px;
      border-radius: 50%;
      border: 1px solid $ui-traffic-red;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<article>
  <h4>{user.name}</h4>
  <div><img src={user.avatar} alt={user.name} /></div>
</article>
