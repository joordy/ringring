<script>
  let user = {
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  }

  let menuOpen = false

  const handleMenu = (e) => {
    menuOpen = !menuOpen
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  #account {
    position: absolute;
    top: 30px;
    right: 50px;
    display: flex;
    h4 {
      font-size: $Heading4;
      font-weight: $bold;
      line-height: 36px;
      margin-right: $m15;
    }
    div {
      margin-top: -6px;
      height: 42px;
      width: 42px;
      border-radius: $borderRound;
      border: 1px solid $ui-red;
      overflow: hidden;
      @include darkMode {
        border: 1px solid $ui-blue;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  .accountMenu {
    display: none;
    width: 230px;
    height: 165px;
    border-radius: $borderS;
    background-color: white;
    position: absolute;
    z-index: 1000;
    right: 50px;
    top: 100px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 4px 10px 0 rgba(0, 0, 0, 0.19);
    transition: 0.5s;
    @include darkMode {
      background-color: $darkui-softblack;
      border: 0.3px solid $darkui-blue;
      color: $darkui-white;
    }
    ul {
      margin: $m15 $m20;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      li {
        list-style-type: none;
        &:hover {
          color: $ui-red;
          @include darkMode {
            color: $darkui-blue;
          }
          font-weight: $bold;
        }
        a {
          text-align: right;
          text-decoration: none;
          line-height: 35px;
        }
      }
    }
  }
  .open {
    display: block;
  }
</style>

<article id="account" on:click={handleMenu}>
  <h4>{user.name}</h4>
  <div><img src={user.avatar} alt={user.name} /></div>
</article>

<div class="accountMenu" class:open={menuOpen}>
  <ul>
    <li><a href="/NOT_YET">Accountgegevens</a></li>
    <li><a href="/NOT_YET">Dashboard instellingen</a></li>
    <li><a href="/NOT_YET">Beveiligings instellingen</a></li>
    <li><a href="/">Uitloggen</a></li>
  </ul>
</div>
